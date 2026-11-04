# Repository Guidelines

## Project Structure & Module Organization
This repository is currently an empty scaffold. Place the public landing page at the repository root (`index.html`) and keep styles, scripts, and static assets in clearly named `css/`, `js/`, and `assets/` directories as the project grows. Put automated checks under `tests/`. Keep each page section focused and reusable; avoid committing generated output or customer-uploaded 3D files.

## Build, Test, and Development Commands
No build system or test runner is configured yet. For an initial static page, open `index.html` in a browser or serve the root directory with `python -m http.server 8000` and visit `http://localhost:8000`. If a framework or tooling is introduced, document its install, development, build, and test commands here and pin dependencies in the relevant manifest.

## Coding Style & Naming Conventions
Use two spaces for HTML, CSS, and JavaScript indentation. Use semantic HTML elements, lowercase kebab-case for file names and CSS classes (for example, `quote-form`), and descriptive JavaScript names. Keep styles and behavior in separate files when they become substantial. Optimize images for the web and include meaningful `alt` text; do not add tracking scripts before consent is recorded.

## Testing Guidelines
There is no test framework or coverage requirement yet. Before submitting changes, check the page at mobile and desktop widths, verify navigation and form validation, and inspect the browser console. When tests are added, name them after the behavior they cover and document the command needed to run them.

## Commit & Pull Request Guidelines
Git history is not available in this scaffold, so no existing commit convention can be confirmed. Use concise imperative commit subjects (for example, `Add quote request form`). Pull requests should explain the user-facing change, include screenshots for visual updates, note manual or automated checks performed, and link any related issue.

## Security, Privacy & Configuration
Collect only data needed to prepare a quote. Keep marketing consent optional and unchecked by default. Explain file use and retention before accepting uploads; validate file type and size on a server and scan files before processing. Never commit credentials, customer files, or private contact data. Configure HTTPS, security headers, upload scanning, and consent-aware analytics at deployment; a static page alone cannot provide these protections.
