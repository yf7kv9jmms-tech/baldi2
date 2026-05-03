# Baldi's Basics Classic - Static Web Build

This repository now contains a static Unity WebGL build of Baldi's Basics Classic.

## Repository Structure

```
.
├── Build/            # Unity WebGL build files
├── TemplateData/     # Unity WebGL template assets
├── index.html        # Main game entry point
└── README.md         # This file
```

## Hosting on GitHub Pages

This repository can be hosted directly with GitHub Pages.

1. Push the repository to GitHub.
2. In the repo settings, enable GitHub Pages.
3. Set the source to the `main` branch and root directory.
4. The game will be served from `https://<username>.github.io/<repo>/`.

## Notes

- No server-side code is required.
- All game assets are stored locally in `Build/` and `TemplateData/`.
- `index.html` loads the Unity WebGL build directly.
