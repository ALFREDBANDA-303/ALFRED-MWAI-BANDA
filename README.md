# Alfred Mwai Banda Portfolio

A static, responsive portfolio built with HTML, CSS, and JavaScript. No backend, demo form, mock API, or framework runtime is required.

## Local preview
Open `index.html` in a browser, or use VS Code Live Server.

Use the theme control at the top of the profile card to switch between light and dark mode. The site follows your system theme until you choose a mode, then remembers your choice in the browser.

The About Me and View Projects buttons open dedicated pages with more information. Both pages include a link back to the profile and the same theme control. LinkedIn and Instagram are shown as inactive until their profile URLs are added in `index.html`.

## Personal assets
Add these files before publishing:
- `assets/profile.jpg`: your profile photo
- `assets/Alfred-Mwai-Banda-CV.pdf`: your current CV

The portrait area displays initials if the photo is not present. CV links point to the real CV file path and will work once you add your PDF.

## Deploy to Cloudflare Pages
1. Create or select a Cloudflare Pages project.
2. Set the project name to `alfredbanda`.
3. Connect this GitHub repository or upload the project files.
4. For a static site, leave the build command empty.
5. Set the build output directory to `/` or the repository root, depending on the Pages setup screen.
6. Deploy. The expected Pages hostname is `https://alfredbanda.pages.dev`.

The `pages.dev` hostname is assigned by Cloudflare. It becomes available after the project is created and deployed under the `alfredbanda` project name.

## Updating projects
Edit the project entries in `projects.html` and keep each project status accurate. Add repository links only when the project has a public source page.
