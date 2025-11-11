# Vapor Edge Motors

Demo:   https://codesavinash.github.io/Vapor_Edge_Motors/

Marketing site for a fictional electric motorcycle brand, built as a static front end. The project showcases product storytelling across multiple pages (`index.html`, `models.html`, `accessories.html`, `contact.html`) with custom styling and light interactivity.

screenshots

## Features<img width="877" height="702" alt="Screenshot 2025-11-11 at 5 42 36 PM" src="https://github.com/user-attachments/assets/a0d92215-d16e-4a22-871b-fafc8425d9d6" />

<img width="1469" height="800" alt="Screenshot 2025-11-11 at 5 41 32 PM" src="https://github.com/user-attachments/assets/e92038ec-1d75-43f4-ab53-774c79f09f24" />


- Responsive layout tailored for desktop and tablet breakpoints.
- Hero, technology, FAQs, and product highlight sections on the landing page.
- Dedicated pages for models, accessories, and contact details.
- Slide-in navigation menu implemented with jQuery (`js/app.js`).
- Local image assets under `assets/images/` supporting the visual design.

## Getting Started
1. Clone or download the project into your local environment.
2. Serve the root directory using any static file server (for example, `python3 -m http.server 8000`) or open `index.html` directly in a browser.
3. Navigate between pages via the top navigation bar or the hamburger menu on smaller screens.

> **Tip:** Using a local static server avoids potential cross-origin issues with certain browsers when loading local assets.

## Project Structure
- `index.html` – Landing page with hero and overview sections.
- `models.html`, `accessories.html`, `contact.html` – Secondary pages for product exploration and inquiries.
- `css/app.css` – Main stylesheet shared across pages.
- `js/app.js` – Navigation toggle logic; depends on `js/jquery.js`.
- `assets/images/` – All imagery and icons referenced by the pages.

## Customization
- Update copy, imagery, or add sections by editing the respective HTML files.
- Extend styles in `css/app.css` and adjust breakpoints as needed.
- Enhance interactivity by expanding `js/app.js` or integrating additional scripts.

## License
No license.


