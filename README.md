# Rahul Shinde | AWS-Focused QA Automation Engineer

A polished personal portfolio website showcasing Rahul Shinde’s QA automation, backend, cloud, and DevOps strengths.

## Overview

This static site includes:
- Hero section with AWS-focused branding
- Animated reveal and counter metrics
- Visual skill progress bars
- Work experience timeline
- Contact section with resume download and messaging links
- Dark/light mode toggle
- Mobile-friendly hamburger navigation

## Files

- `index.html` — page markup
- `styles.css` — all page styling and responsive layout
- `script.js` — interactive behaviors for theme toggle, counters, progress bars, and mobile nav
- `.gitignore` — ignores common editor and system files

## Run locally

1. Open the project folder in VS Code.
2. Launch a local server:

```bash
python -m http.server 8000
```

3. Open `http://localhost:8000` in your browser.

## Deploy to GitHub Pages

1. Create a repository on GitHub.
2. Add the remote and push the branch:

```bash
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

3. In GitHub repository settings, enable GitHub Pages from the `main` branch.

## Notes

- The design is fully static and works without a backend.
- The contact form uses a `mailto:` action for direct email contact.
- For any changes, edit `index.html`, `styles.css`, and `script.js` as needed.
