# AI Vision Portfolio

Build a premium, high-tech, and visually stunning interactive portfolio for an AI Software Engineer. 

The design must be sleek, minimalist, and highly professional, aimed at impressing a CTO and tech partners. 

CRITICAL REQUIREMENT: The entire website must be in Hebrew, and the layout MUST be RTL (Right-to-Left). Add `dir="rtl"` to the main container and use a modern Hebrew web font like 'Heebo' or 'Rubik'.

Design System & Vibe:

- Color Palette: Deep, rich dark mode by default (slate/zinc/black) with subtle, futuristic accent colors (like glowing cyan, neon purple, or sleek emerald green) for hover states and primary buttons.

- Styling: Use glassmorphism (backdrop-blur) for cards and modals. Clean lines, generous whitespace, and highly polished typography.

- Animations: Smooth, subtle fade-ins, and elegant hover transitions on cards. No bouncy or childish animations.

Page Structure:

1. Hero Section: 

   - A bold, clean headline in Hebrew introducing me as an AI Developer.

   - A short, punchy subtitle.

   - A call-to-action button: "צפו בעבודות שלי" (View my work) that scrolls down to the projects.

2. Projects Grid (The Core):

   - A responsive grid of beautiful project cards.

   - Each card has a placeholder thumbnail, a title, a short description, and tech stack tags (e.g., Python, React, RAG, LLMs).

   - INTERACTION: Clicking anywhere on a project card MUST open a sleek Modal/Dialog overlay.

3. Project Modal (Inside the Modal):

   - A large, beautiful layout containing:

   - A large placeholder `iframe` for a Video Demo (aspect-video).

   - Below it, a placeholder `iframe` for a Slide Presentation.

   - Project description text.

   - Two stylish buttons: "צפה בקוד ב-GitHub" (View Code) and "למצגת המלאה" (Full Presentation).

   - Note: Use placeholder URLs for the iframes for now, I will replace them later.

4. Footer:

   - Minimalist footer with links to my LinkedIn, GitHub, and email address.

Use Shadcn UI components for the Dialogs/Modals, Buttons, and Cards to ensure it looks exceptionally polished and works flawlessly in React.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/375de847-a167-4e71-894c-05d7b29d7052).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
