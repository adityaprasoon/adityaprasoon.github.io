# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
pnpm install --frozen-lockfile
```

Use Node.js 22 and pnpm 10.14.0, matching the deployment workflow.

## Local Development

```bash
pnpm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Notes categories

The notes overview and sidebar are generated automatically from the folders in
`notes/`. Add a top-level folder with a `_category_.json` file to create a subject;
use `label`, `position`, and a `generated-index` link as in the existing categories.
Add at least one published note in the folder for Docusaurus to display it.
The overview remains the landing page rather than a sidebar item.

### Note status

Optionally add a status to a note's YAML frontmatter:

```yaml
---
status: work-in-progress
tags: [linear-algebra]
---
```

Supported statuses are `work-in-progress`, `completed`, and `abandoned`.
Status badges appear above the note title and beneath its title on generated
category cards. Subject tags remain separate from status.
Notes without frontmatter or without `status` render normally without a badge.
Invalid status values fail the build with an error rather than silently hiding
the badge. No status is assigned automatically.

Run the status validation tests with Node.js 22:

```bash
node --experimental-strip-types --test tests/noteStatus.test.mjs
```

## Build

```bash
pnpm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

The site is published at https://adityaprasoon.github.io.

In the repository's **Settings > Pages**, set **Source** to **GitHub Actions**.
The workflow in `.github/workflows/deploy.yml` builds and deploys on pushes to
`main`, and can also be run manually from the Actions tab. Pull requests to
`main` build the site without deploying it.

Deployment uses the built-in `GITHUB_TOKEN`; no personal access token or
`gh-pages` branch is required.
