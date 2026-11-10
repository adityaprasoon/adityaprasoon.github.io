import React, {type ReactNode} from 'react';
import Layout from '@theme/Layout';
import useBrokenLinks from '@docusaurus/useBrokenLinks';
import {AiInvolvementLabel} from '@site/src/components/AiInvolvement';
import {
  aiInvolvementLevels,
  type AiInvolvement,
} from '@site/src/utils/aiInvolvement';
import styles from './ai-use.module.css';

const pageDescription =
  'How much AI was involved in writing the notes on this site.';

export default function AiUsePage(): ReactNode {
  const levels = Object.keys(aiInvolvementLevels) as AiInvolvement[];
  const brokenLinks = useBrokenLinks();
  levels.forEach((level) => brokenLinks.collectAnchor(level));
  return (
    <Layout title="AI Use" description={pageDescription}>
      <main className="container margin-vert--lg">
        <h1>AI Use</h1>
        <p>
          Content on this site may show a label describing how much AI
          was involved in writing them. Pages without
          a label are likely human written.
        </p>
        <dl>
          {levels.map((level) => (
            <div key={level} id={level} className={styles.entry}>
              <dt>
                <AiInvolvementLabel value={level} />
              </dt>
              <dd>{aiInvolvementLevels[level].description}</dd>
            </div>
          ))}
        </dl>
      </main>
    </Layout>
  );
}
