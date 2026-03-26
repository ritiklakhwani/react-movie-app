# MovieFlix

A movie discovery app built with React. Browse popular movies, check what's trending, or search for anything -- powered by the TMDB API.

![React](https://img.shields.io/badge/React-19-blue) ![Vite](https://img.shields.io/badge/Vite-8-purple) ![Tailwind](https://img.shields.io/badge/Tailwind-4-cyan)

## Features

- **Trending section** -- top 10 trending movies in a horizontal scroll with ranked numbering
- **Search** -- debounced search that hits TMDB's search API as you type
- **Infinite scroll** -- automatically loads more movies as you scroll down using IntersectionObserver
- **Animations** -- staggered card entrance animations with Framer Motion
- **Responsive** -- works on mobile, tablet, and desktop

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4
- Framer Motion
- TMDB API

## Getting Started

**1. Clone the repo**

```bash
git clone https://github.com/your-username/react-movie-app.git
cd react-movie-app
```

**2. Install dependencies**

```bash
npm install
```

**3. Set up your TMDB API key**

Create a `.env` file in the root:

```
VITE_TMDB_API_KEY=your_tmdb_api_key_here
```

You can get a free API key at [themoviedb.org](https://www.themoviedb.org/settings/api).

**4. Run the dev server**

```bash
npm run dev
```

## Project Structure

```
src/
  App.jsx              # Main app component, API calls, state management
  components/
    search.jsx         # Search input with controlled state
    movieCard.jsx      # Individual movie card (poster, rating, year, language)
    spinner.jsx        # Loading spinner
  index.css            # All styles (Tailwind layers + custom utilities)
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
