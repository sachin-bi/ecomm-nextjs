# Ecomm - Modern E-Commerce Web Application

Ecomm is a modern, full-stack e-commerce web application built with Next.js and MongoDB. It provides a seamless shopping experience with product browsing, search functionality, and admin product management.

## Features

- Modern and responsive UI built with Next.js and Tailwind CSS
- Product listing and detail pages
- Product search functionality
- Admin dashboard for managing products (add, update, delete)
- MongoDB integration with Mongoose
- REST API endpoints for CRUD operations

## Tech Stack

- **Frontend:** Next.js 16, React, Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** MongoDB (via Mongoose)
- **Deployment:** Vercel

## Folder Structure

src/
├── app/
│ ├── (main)/
│ │ ├── home/
│ │ ├── shop/
│ │ │ └── [id]/
│ │ ├── search/
│ │ └── about/
│ ├── (admin)/
│ │ └── dashboard/
│ │ └── products/
│ ├── api/
│ │ └── products/
│ │ ├── route.js
│ │ └── [id]/route.js
│ └── layout.jsx
├── components/
│ └── common/
│ └── ListedProducts.jsx
├── lib/
│ └── dbConnect.js
└── utils/
└── productService.js


## Environment Variables

Create a `.env` file in the root directory:

MONGODB_URI="your-mongodb-connection-string"


Make sure to add this variable in the Vercel dashboard under **Settings → Environment Variables** before deploying.

## Running Locally

```bash
npm install
npm run dev
```
Then open http://localhost:3000

Building for Production:
```bash
npm run build
npm start
```

License:
This project is licensed under the MIT License.
---

