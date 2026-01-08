# Country Explorer Frontend

A React application that displays country information with search and filter functionality.

## Features

- View list of countries with name, flag, and region
- Search countries by name (real-time filtering)
- Filter countries by region (Africa, Americas, Asia, Europe, Oceania)
- View country details (capital, population, languages, flag)

## Tech Stack

- React
- Vite
- Axios

## Setup

```bash
npm install
npm run dev
```

## Environment Variables

For production deployment (Vercel), set:

| Variable | Value |
|----------|-------|
| `VITE_API_URL` | `https://your-backend.onrender.com/api` |

## API

This frontend connects to a Node.js backend. In development, it uses `http://localhost:5000/api`.
