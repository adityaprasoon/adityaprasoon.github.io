import {createElement, type ComponentType} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

type EntryModule = {
  default: ComponentType;
  frontMatter: {
    title?: string;
    date?: string | Date;
  };
  contentTitle?: string;
};

type NowEntry = {
  title: string;
  date: Date;
  permalink: string;
  content: ComponentType;
};

declare const require: {
  context(
    directory: string,
    useSubdirectories?: boolean,
    regExp?: RegExp,
  ): {
    keys(): string[];
    (id: string): EntryModule;
  };
};

const updateModules = require.context('./now/entries', false, /\.mdx?$/);
const pageDescription =
  'Occasional updates on things I am working on, books I am reading, what I am learning, and life in general.';

function getEntries(): NowEntry[] {
  return updateModules
    .keys()
    .map((file) => {
      const entry = updateModules(file);
      const fileName = file.replace(/^\.\//, '').replace(/\.mdx?$/, '');
      const filenameDate = fileName.match(/^(\d{4}-\d{2}-\d{2})/)?.[1];
      const rawDate = entry.frontMatter.date ?? filenameDate;

      if (!rawDate) {
        throw new Error(
          `Now entry "${fileName}" must have a date in its filename or front matter.`,
        );
      }

      const date = new Date(rawDate);
      if (Number.isNaN(date.getTime())) {
        throw new Error(`Now entry "${fileName}" has an invalid date.`);
      }

      return {
        title: entry.frontMatter.title ?? entry.contentTitle ?? fileName,
        date,
        permalink: `/now/entries/${fileName}`,
        content: entry.default,
      };
    })
    .sort((first, second) => second.date.getTime() - first.date.getTime());
}

function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
    timeZone: 'UTC',
  }).format(date);
}

export default function NowPage() {
  const [latest, ...previous] = getEntries();

  return (
    <Layout title="Now" description={pageDescription}>
      <main className="container margin-vert--lg">
        <h1>{latest ? `Now: ${formatDate(latest.date)}` : 'Now'}</h1>
        <p>{pageDescription}</p>

        <blockquote>
          <p>
            A <a href="https://now.page/">now page</a> is a page to share what
            you are currently up to in a mindful way, unlike social media.
          </p>
        </blockquote>

        {latest ? (
          <>
            <h2>{latest.title}</h2>
            <p>{formatDate(latest.date)}</p>
            {createElement(latest.content)}
          </>
        ) : (
          <p>
            <em>No updates are posted yet.</em>
          </p>
        )}

        <h2>Previous Updates</h2>
        {previous.length > 0 ? (
          <ul>
            {previous.map((entry) => (
              <li key={entry.permalink}>
                <Link to={entry.permalink}>
                  {entry.title} ({formatDate(entry.date)})
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No prior updates are available.</p>
        )}
      </main>
    </Layout>
  );
}