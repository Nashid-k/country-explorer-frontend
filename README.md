# Country Explorer — React Frontend

A React single-page application for browsing countries. Users can search by country name, filter by region, browse paginated results and open a detail view with country information.

## Features

- Country search
- Region filtering
- Paginated country list
- Country detail modal with flag, capital, population, region and languages
- Loading, error and empty-result states

## Stack

- React 19
- Vite 7
- React Router 7
- Axios
- CSS

## Run locally

```bash
git clone https://github.com/Nashid-k/country-explorer-frontend.git
cd country-explorer-frontend
npm install
npm run dev
```

The frontend expects the companion API to be available at `http://localhost:5000`. Start [country-explorer-backend](https://github.com/Nashid-k/country-explorer-backend) separately.

## Scripts

- `npm run dev` — start Vite
- `npm run build` — create production assets
- `npm run preview` — preview the build
- `npm run lint` — run ESLint
