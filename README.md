# Simple Landing Page

A beautiful, modern landing page built with Next.js and Tailwind CSS, ready for Vercel deployment.

## Features

- 🎨 Modern gradient design with glassmorphism effects
- 📱 Fully responsive layout
- ⚡ Built with Next.js 14 for optimal performance
- 🎯 Email signup form with state management
- 🚀 Ready for Vercel deployment

## Deploy to Vercel

This project is configured for easy deployment to Vercel via Git:

1. Push this repository to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically detect Next.js and deploy with the correct settings

The project includes:
- `vercel.json` for deployment configuration
- `next.config.js` for Next.js optimization
- All necessary dependencies in `package.json`

## Local Development

If you want to run this locally:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
├── pages/
│   ├── _app.tsx          # App wrapper with global styles
│   └── index.tsx         # Landing page
├── styles/
│   └── globals.css       # Global styles with Tailwind
├── package.json          # Dependencies and scripts
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── vercel.json           # Vercel deployment settings
```

## Customization

- Update the content in `pages/index.tsx`
- Modify styles in `styles/globals.css` or through Tailwind classes
- Change the product name and branding throughout the files
