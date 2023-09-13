This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Slicing Design - Collosal

Slicing Design Challenge from [codedesign.dev](https://codedesign.dev/). The challenge I chose with the master's difficulty level can be read at [codedesign.dev/collosal](https://codedesign.dev/challenge/collosal).

UI Designer: [Muhammad Nauval Azhar](https://www.figma.com/@mhd) <br>
Frontend Dev: [Muhammad Naufal Yafi'](https://github.com/naufal-yafi)

![result-preview](https://github.com/naufal-yafi/collosal-slicing-design/assets/87789251/b7c52699-1d36-40f9-a3bb-5c922709df35)

# Table of Content

- [Slicing Design - Collosal](#slicing-design---collosal)
- [Table of Content](#table-of-content)
  - [Getting Started](#getting-started)
    - [Learn More](#learn-more)
    - [Deploy on Vercel](#deploy-on-vercel)
  - [Components](#components)
    - [Title](#title)
    - [Header](#header)
    - [Footer](#footer)
    - [Background Blur](#background-blur)
    - [Button](#button)
      - [Button Primary](#button-primary)
      - [Button Secondary](#button-secondary)
    - [Company Logo](#company-logo)
    - [Feature Card](#feature-card)
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

## Components

### Title

Preview:

![preview-title](https://github.com/naufal-yafi/collosal-slicing-design/assets/87789251/bf764e47-3256-489a-aa49-6f1dc6a048c5)

Property:

```ts
default: {
  set: "Collosal - Tell us about your problem and how we can help"
}
```

How to use:

```ts
import Title from "@component/Title";

// Use Default Option
<Title />

// Custom Title
<Title set="My Custom Title" />
```
 
[👆 [Table of Content](#table-of-content)]

### Header

Preview:

![preview-header](https://github.com/naufal-yafi/collosal-slicing-design/assets/87789251/a6515f36-6a8f-49aa-9ce6-85d9177b94d8)

Property:

```ts
default: {
  params: "/"
}

available_params: [
  "/",
  "/service",
  "/work",
  "/project",
  "/about",
]
```

How to use:

```ts
import Header from "@component/Header";

// Use Default Option
<Header />

// Change Active Nav Button
<Header params="/work" />
```

[👆 [Table of Content](#table-of-content)]

### Footer

Preview:

![preview-header](https://github.com/naufal-yafi/collosal-slicing-design/assets/87789251/58ee120d-7a29-40a9-976b-7038701aa698)

How to use:

```ts
import Footer from "@component/Footer";

<Footer />
```

### Background Blur

Preview:

![preview-background-blur](https://github.com/naufal-yafi/collosal-slicing-design/assets/87789251/5884fe28-b9f5-4d2c-9fb6-24e792ecf317)

How to Use:

```ts
import BackgroundBlur from "@component/BackgroundBlur";

<Title />
<Header />

// This is the order of component placement
<BackgroundBlur />

<main></main>
<section></section>
...

<Footer />
```

[👆 [Table of Content](#table-of-content)]

### Button

Preview:

![preview-button](https://github.com/naufal-yafi/collosal-slicing-design/assets/87789251/7111daed-84e2-4fbd-a51d-4411abcb878d)

Property:

```ts
default: {
  link: "/",
  size: "large",
  type: "default",
  w_full: false,
  rounded: false,
}

available_property: {
  link: "free but prefix must be given /",
  size: ["large", "small"],
  type: ["default", "outline", "muted"],
  w_full: [true, false],
  rounded: [true, false]
}
```

#### Button Primary

How to use:

```ts
import ButtonPrimary from "@button/ButtonPrimary";

// Use Default Option
<ButtonPrimary>Button</ButtonPrimary>

// Custom Button Style
<ButtonPrimary 
  link="/location" 
  size="small" 
  type="muted"
  w_full={true}
>
  This My Home
</ButtonPrimary>
```

[👆 [Table of Content](#table-of-content)]

#### Button Secondary

How to use:

```ts
import ButtonSecondary from "@button/ButtonSecondary";

// Use Default Option
<ButtonSecondary>Button</ButtonSecondary>

// Custom Button Style
<ButtonSecondary 
  link="/contact" 
  size="large" 
  type="outline"
  rounded={true}
>
  Contact Me
</ButtonSecondary>
```

[👆 [Table of Content](#table-of-content)]

### Company Logo

Preview:

![preview-company-logo](https://github.com/naufal-yafi/collosal-slicing-design/assets/87789251/6463f753-62f6-4281-95a2-e23fa43a724a)

How to Use:

```ts
import CompanyLogo from "@component/CompanyLogo";

<CompanyLogo />
```

[👆 [Table of Content](#table-of-content)]


### Feature Card

Preview:

![preview-feature-card](https://github.com/naufal-yafi/collosal-slicing-design/assets/87789251/67c3b37e-0dac-4fe9-9a20-5dd501405f10)

Property:

```ts
default: {
  img: "/assets/icons/weight-figma.svg",
  title: "Design",
  desc: "The project interface will be designed first, our favorite tool is Figma.",
}
```

How to Use:

```ts
import FeatureCard from "@component/FeatureCard";

// Import your icon/logo asset
import weightBoxIcon from "@logo/weight-box.svg";
import weightCodeIcon from "@logo/weight-code.svg";

<section className="grid grid-cols-1 md:grid-cols-3 gap-5">
  <!-- Use Default Option -->
  <FeatureCard />

  <!-- Example Custom Option -->
  <FeatureCard
    img={weightCodeIcon}
    title="Develop"
    desc="Transform design and write business logic here. Choose the technology you want."
  />
  <FeatureCard
    img={weightBoxIcon}
    title="Ship"
    desc="After the work is complete, we will send the project and all its assets to you."
  />
</section>
```

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
