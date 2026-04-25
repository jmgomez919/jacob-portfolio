# Jacob Gomez — Digital Portfolio

A personal portfolio website built with React, showcasing film poster design, social media marketing, and photography work.

**Live site:** *(deploy URL goes here)*

---

## Pages

| Page | Description |
|---|---|
| **Home** | Hero, stats strip, welcome section, and services overview |
| **About** | Bio, skills & tools, interests, and experience timeline |
| **Projects** | Film posters, Volunteer UCF Instagram showcase, and photography collections |
| **Contact** | Contact form and social links |

## Tech Stack

- [React](https://react.dev/) (Create React App)
- [React Router v6](https://reactrouter.com/)
- [Framer Motion](https://www.framer-motion.com/) — page transitions and scroll animations
- CSS custom properties for design tokens (colors, fonts, spacing)
- Custom fonts: TAN-BUSTER (display), Source Serif Pro (body)

## Getting Started

```bash
npm install
npm start
```

Runs the app at [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Outputs a production build to the `build/` folder.

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
  pages/
    Home/
    About/
    Projects/
    Contact/
  utils/
    animations.js # Shared Framer Motion variants
  data/
    skills.js
```

## Design

- **Colors:** `#F5F0E7` beige background · `#293491` blue · `#000000` text
- **Display font:** TAN-BUSTER
- **Body font:** Source Serif Pro
