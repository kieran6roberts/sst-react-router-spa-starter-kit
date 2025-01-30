# Welcome to your app Frontend!

## Features

- Client side rendering approach using React Router v7 as a library
- TypeScript
- TailwindCSSv4 for styling
- Vite for build and dev

Read the React Router docs for more info on React Router v7 specifics: [React Router docs](https://reactrouter.com/)

## Getting Started

### Installation

Install the dependencies:

```bash
pnpm i
```

### Development

Start the development server:

```bash
pnpm dev
```

Your app will be available at `http://localhost:5173`.

## Building for Production

Create and preview a prod build:

```bash
pnpm build && pnpm preview
```

## Linting

To lint the codebase, run the following command:

```bash
pnpm lint
```

To format code using Prettier, run the following command:

```bash
pnpm prettier:fix
```

## Type Checking

To type check the codebase, run the following command:

```bash
pnpm type-check
```

## Styling

This template comes with the brand new [Tailwind CSS v4](https://tailwindcss.com/) installed. Setup using the `@tailwindcss/vite` plugin in `vite.config.ts` and the `src/styles/app.css` file. If you want to use a different styling method, those are files to update.
