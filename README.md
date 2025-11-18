
  # Portfolio Website Design

  This is a code bundle for Portfolio Website Design. The original project is available at https://www.figma.com/design/XcE1wAz3bpTsNULZsuj7Of/Portfolio-Website-Design.

## Running the code

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## Deploying to GitHub Pages

1. Make sure your repository is pushed to GitHub (e.g. `username/repo-name`).
2. Build and publish to GitHub Pages with:
   ```
   npm run deploy
   ```
   This script runs the production build and uploads the `build` folder to the `gh-pages` branch using `gh-pages`.
3. In your repository settings on GitHub, go to **Pages** and choose the `gh-pages` branch as the source.
4. Your site will be available at `https://username.github.io/repo-name/` once GitHub finishes publishing.

> The Vite config automatically uses relative asset paths in production so the site works correctly when served from `/repo-name/`.
  