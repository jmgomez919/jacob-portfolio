# Jacob Gomez — Digital Portfolio

A personal portfolio website built with React, showcasing graphic design, film poster work, social media marketing, photography, and web projects.

**Live site:** https://dainty-nougat-12ed9a.netlify.app

---

## Pages

| Page | Description |
|---|---|
| **Home** | Hero section with CTA buttons and services overview |
| **About** | Bio, skills & tools, interests, and experience timeline |
| **Projects** | Film posters, Volunteer UCF Instagram showcase, website projects, and photography collections |
| **Contact** | Contact form and social links |

## Tech Stack

- [React](https://react.dev/) (Create React App)
- [React Router v7](https://reactrouter.com/)
- [Framer Motion](https://www.framer-motion.com/) — page transitions and scroll animations
- CSS custom properties for design tokens (colors, fonts, spacing)
- Custom fonts: TAN-BUSTER (display), Source Serif Pro (body)

## Static Fallback

A fully styled `<noscript>` fallback is included in `public/index.html`. Visitors with JavaScript disabled will see a readable HTML page with bio, skills, and contact info.

## Getting Started

```bash
npm install
npm start
```

Runs the app at [http://localhost:3000](http://localhost:3000).

## Build & Deploy

```bash
npm run build
netlify deploy --prod --dir=build
```

Outputs a production build to the `build/` folder and deploys to Netlify.

## Project Structure

```
public/
  fonts/          # TAN-BUSTER, Source Serif Pro
  images/         # Posters, logos, profile photo, icons
    vucf/         # Volunteer UCF post cover images
src/
  components/
    Navbar/
    Footer/
    ProjectCard/
  pages/
    Home/
    About/
    Projects/
    Contact/
  utils/
    animations.js # Shared Framer Motion variants
  data/
    projects.js
    skills.js
```

## Design

- **Colors:** `#F5F0E7` beige background · `#293491` blue · `#000000` text
- **Display font:** TAN-BUSTER
- **Body font:** Source Serif Pro
