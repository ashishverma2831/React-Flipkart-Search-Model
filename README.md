# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## UI components and animations

The project is configured for shadcn/ui JavaScript components (`components.json`, `tsx: false`) with the `@/` alias and Tailwind CSS variables. Add more components with:

```sh
npx shadcn@latest add card
```

Reusable UI components live in `src/components/ui`. Framer Motion is installed and animates laptop results in the browse view.

The laptop catalog supports combined search, brand, processor brand/family/generation, RAM capacity/type, storage type/capacity, operating system, screen size, price, and rating filters, plus sorting and pagination. Facets are derived from the fields present in `laptopData.js`; hardware attributes absent from that local dataset are not presented as filters. The cart is a client-side demo and does not submit orders to Flipkart.
