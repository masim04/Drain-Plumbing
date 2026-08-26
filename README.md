# Drain & Plumbing Services

A responsive plumbing services website built with React, Vite, and Tailwind CSS. The site includes dedicated pages for home, company information, services, locations, project gallery, and contact requests.

## Features

- Responsive Tailwind CSS layout for desktop, tablet, and mobile screens
- Hash-based navigation between independent page components
- Reusable navigation, footer, hero, CTA, and section-title components
- Service cards with local image assets
- Service-area listings and contact request form
- Phone and after-hours SMS links
- ESLint and production build scripts

## Pages

The page components are located in `src/pages/`:

- `Home.jsx`
- `About.jsx`
- `Services.jsx`
- `Locations.jsx`
- `Gallery.jsx`
- `Contact.jsx`

Shared UI components are located in `src/components/`.

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Run the linter:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
src/
  assets/              Images used throughout the site
  components/          Shared layout and content components
  pages/               Independent page components
  App.jsx              Hash navigation and app composition
  index.css            Tailwind entry stylesheet
  main.jsx             React application entry point
```

## Navigation

The app uses URL hashes instead of a routing package. Pages can be opened directly with URLs such as:

```text
/#home
/#about
/#services
/#locations
/#gallery
/#contact
```
