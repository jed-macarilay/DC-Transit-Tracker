# MetroPulse App

This is my personal project, built and maintained independently.

## Project Intent

MetroPulse is a React + TypeScript application that aims to replicate WMATA app-style transit features by using official public WMATA developer APIs:

- https://developer.wmata.com/apis

The project is implemented from public API documentation and original code only.

## Personal Use Note

This repository is for personal project and learning purposes.

## Setup

1. Install dependencies:
   - `npm install`
2. Copy env:
   - `cp .env.example .env`
3. Add your WMATA key:
   - `VITE_WMATA_API_KEY=...`
4. Start:
   - `npm run dev`

## Included

- React + Vite + TypeScript
- React Router app shell
- TanStack Query provider
- Tailwind CSS theme setup
- WMATA client and starter endpoints
- Dashboard, Alerts, Stations, Trip Planner pages