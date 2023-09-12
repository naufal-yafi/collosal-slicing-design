This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Slicing Design - Collosal

Slicing Design Challenge from [codedesign.dev](https://codedesign.dev/). The challenge I chose with the master's difficulty level can be read at [codedesign.dev/collosal](https://codedesign.dev/challenge/collosal).

# Table of Content

- [Slicing Design - Collosal](#slicing-design---collosal)
- [Table of Content](#table-of-content)
  - [Getting Started](#getting-started)
    - [Learn More](#learn-more)
    - [Deploy on Vercel](#deploy-on-vercel)
  - [API Specification](#api-specification)
    - [Get All Data Blog](#get-all-data-blog)
    - [Get Spesific Blog Using Slug](#get-spesific-blog-using-slug)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

[👆 [Table of Content](#table-of-content)]

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

[👆 [Table of Content](#table-of-content)]

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

[👆 [Table of Content](#table-of-content)]

## API Specification

API ini digunakan untuk menyimpan dan memunculkan beberapa data thumbnail, author, title dan deskrisi blog.

### Get All Data Blog

Route:

```js
GET /api/blog;
```

Success Response:

```json
{
  "code": 200,
  "status": "OK",
  "message": "Successfully Retrieving Data",
  "page": {
    "total_data": 6
  },
  "data": [
    {
      "id": 1,
      "thumbnail": "thumbnail-05",
      "title": "SEO tricks that can increase the traffic of your website",
      "slug": "seo-tricks-that-can-increase-the-traffic-of-your-website",
      "description":
      "People have been using wrong SEO techniques on their websites.",
      "date": "Mar 18",
      "reading_time": "5 min read",
      "author": {
        "photo": "profile-05",
        "username": "Jane Cooper",
        "job": "Writers",
      },
    },
    {
      "id": 2,
      "thumbnail": "thumbnail-06",
      "title": "10 Figma Plugins that will increase your productivity",
      "slug": "10-figma-plugins-that-will-increase-your-productivity",
      "description": "All these plugins are free and you can use them forever.",
      "date": "Mar 11",
      "reading_time": "3 min read",
      "author": {
        "photo": "profile-06",
        "username": "Alex Berner",
        "job": "UI Designer",
      },
    },
    ...
  ]
}
```

Server Error Response:

```json
{
  "code": 500,
  "status": "Internal Server Error",
  "message": (error as Error).message,
  "page": {
    "total_data": 0,
  },
  "data": null,
}
```

[👆 [Table of Content](#table-of-content)]

### Get Spesific Blog Using Slug

Route:

```js
GET /api/{ slug };
```

Success Response:

```json
// Example: GET /api/seo-tricks-that-can-increase-the-traffic-of-your-website
{
  "code": 200,
  "status": "OK",
  "message": "Successfully Retrieving Data",
  "page": {
    "total_data": 1
  },
  "data": {
    "id": 1,
    "thumbnail": "thumbnail-05",
    "title": "SEO tricks that can increase the traffic of your website",
    "slug": "seo-tricks-that-can-increase-the-traffic-of-your-website",
    "description":
      "People have been using wrong SEO techniques on their websites.",
    "date": "Mar 18",
    "reading_time": "5 min read",
    "author": {
      "photo": "profile-05",
      "username": "Jane Cooper",
      "job": "Writers",
    },
  }
}
```

Data Not Found Response:

```json
{
  "code": 404,
  "status": "Error Not Found",
  "message": "Data could not be found",
  "page": {
    "total_data": 0,
  },
  "data": null,
}
```

[👆 [Table of Content](#table-of-content)]
