# BankDash — React Responsive Frontend

Responsive React implementation of the supplied BankDash Figma dashboard reference.

## Stack
- React + Vite
- Tailwind CSS v4
- React Router DOM
- Axios (ready for API integration)
- Framer Motion
- Lucide React

## Pages
Dashboard, Transactions, Accounts, Investments, Credit Cards, Loans, Services, Settings.

## Run locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Production build

```bash
npm run build
npm run preview
```

## GitHub

```bash
git init
git add .
git commit -m "Build responsive BankDash React dashboard"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## Vercel

Import the GitHub repository into Vercel. Vercel normally detects Vite automatically.

Build command:
`npm run build`

Output directory:
`dist`

## Notes

The UI uses local mock data so the assignment can run without a backend. Axios is included and can be connected later to a REST API.
