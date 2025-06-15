# React Landing Page

This is a simple React landing page built with reusable components including a Navbar, Jumbotron, Card section, and Footer.

## Features

- Modular component structure (Navbar, Jumbotron, Cards, Footer)
- Responsive layout using Bootstrap classes
- Props used to customize card content
- Placeholder images and text (easily replaceable)

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Jumbotron.jsx
│   ├── Card.jsx
│   └── Footer.jsx
├── Home.jsx
├── App.js
└── index.js
```

## Getting Started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the development server

   ```bash
   npm start
   ```

3. View in browser  
   Open `http://localhost:3000`

## Customize

- Replace placeholder image URLs with your own in `Home.jsx`
- Edit card titles and text through the `cardData` array

## Build for Production

```bash
npm run build
```

## Learn More

This project is great for learning:

- Functional React components
- Passing props
- Component-based design
- Bootstrap layout classes
