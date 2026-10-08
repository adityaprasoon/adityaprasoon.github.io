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
