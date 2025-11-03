# Foodwars

Foodwars is a simple front-end HTML project — a browser-based game or interactive demo built with plain HTML (and optionally CSS/JS included in the repo). This repository currently contains only HTML files.

## Features
- Single-page or multi-page HTML-based experience, including the new cooperative VolleySim experiment (`volleyball.html`)
- No build tools required
- Ready to open and play in any modern browser

## Getting started

1. Clone the repository:
   ```bash
   git clone https://github.com/Nomarcus/Foodwars.git
   cd Foodwars
   ```

2. Open the project in your browser:
   - Double-click `index.html` (or the main HTML file) or
   - Serve it locally (recommended for features that use fetch/APIs):
     ```bash
     # using Python 3
     python -m http.server 8000
     # then visit http://localhost:8000
     ```

## Project structure
- index.html — main entry point (may vary)
- assets/ — images, sounds, CSS, JS (if present)

Adjust paths and filenames as needed to match the repository contents.

## Development
- Edit HTML, CSS, and JS files directly.
- No compilation step required.
- Use your browser dev tools to debug layout and scripts.

## Contribution
Contributions are welcome. Suggested workflow:
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m "Add feature"`
4. Push branch and open a pull request

Please include a short description of the change and any relevant screenshots or steps to test.

## License
This project is licensed under the MIT License. See LICENSE file for details.

## Notes / Next steps
- If you want, I can:
  - Add a short gameplay README section with controls and rules (tell me the controls/rules).
  - Generate badges (build/test/license) if you add CI or other metadata.
  - Create a CONTRIBUTING.md or CODE_OF_CONDUCT.md.
  - Update the README with the exact main HTML filename if it's not `index.html`.