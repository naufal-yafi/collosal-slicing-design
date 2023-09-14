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
      - [Preview](#preview)
      - [Property](#property)
      - [How to use](#how-to-use)
      - [Custom](#custom)
    - [Header](#header)
      - [Preview](#preview-1)
      - [Property](#property-1)
      - [How to use](#how-to-use-1)
      - [Custom (Active Button Navigation)](#custom-active-button-navigation)
    - [Footer](#footer)
      - [Preview](#preview-2)
      - [How to use](#how-to-use-2)
    - [Background Blur](#background-blur)
      - [Preview](#preview-3)
      - [How to Use](#how-to-use-3)
    - [Button](#button)
      - [Preview](#preview-4)
      - [Variations](#variations)
      - [Property](#property-2)
      - [Button Primary](#button-primary)
        - [How to use](#how-to-use-4)
      - [Button Secondary](#button-secondary)
        - [How to use](#how-to-use-5)
    - [Company Logo](#company-logo)
      - [Preview](#preview-5)
      - [How to Use](#how-to-use-6)
    - [Feature Card](#feature-card)
      - [Preview](#preview-6)
      - [Property](#property-3)
      - [How to Use](#how-to-use-7)
      - [Custom (3-column lined layout)](#custom-3-column-lined-layout)
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

#### Preview

![preview-title-default](https://github.com/naufal-yafi/collosal-slicing-design/assets/87789251/37631906-02bc-4dc5-80d5-141679cdd532)

You can change icon tab on
- ./public/favicon.ico
- ./public/icon.svg
- ./public/apple-icon.png

#### Property

```ts
default: {
  set: "Your Title"
}
```

#### How to use

```ts
import Title from "@component/Title";

<Title set="Collosal - Tell us about your problem and how we can help"/>
```

#### Custom

```ts
import Title from "@component/Title";

<Title set="My Custom Title" />
```
![preview-title-custom](https://github.com/naufal-yafi/collosal-slicing-design/assets/87789251/bf764e47-3256-489a-aa49-6f1dc6a048c5)

[👆 [Table of Content](#table-of-content)]

### Header

#### Preview

Still on top

![preview-header-ontop](https://github.com/naufal-yafi/collosal-slicing-design/assets/87789251/73c6e05a-0c5a-43c5-b5be-998522683cd2)

After scroll: add effect blur

![preview-header-default-afterscroll](https://github.com/naufal-yafi/collosal-slicing-design/assets/87789251/a48b2800-22fa-430b-8037-27076f2cb43e)

#### Property

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

#### How to use

```ts
import Header from "@component/Header";

<Header />
```

#### Custom (Active Button Navigation)

```ts
import Header from "@component/Header";

<Header params="/work" />
```

![preview-header-custom](https://github.com/naufal-yafi/collosal-slicing-design/assets/87789251/2dea18df-069d-42e3-8c83-0939936bf9d5)

[👆 [Table of Content](#table-of-content)]

### Footer

#### Preview

![preview-header](https://github.com/naufal-yafi/collosal-slicing-design/assets/87789251/58ee120d-7a29-40a9-976b-7038701aa698)

#### How to use

```ts
import Footer from "@component/Footer";

<Footer />
```

### Background Blur

This background have smooth animation.

#### Preview

![preview-blur-bg](https://github.com/naufal-yafi/collosal-slicing-design/assets/87789251/9eeed9b3-9531-4f3e-abfe-5db6fc3b1b76)

#### How to Use

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

#### Preview
Primary : ![btn-primary](https://github.com/naufal-yafi/collosal-slicing-design/assets/87789251/9469e88f-17e9-4b1d-9b3f-a14d3aa08a22)

Secondary: ![btn-secondary](https://github.com/naufal-yafi/collosal-slicing-design/assets/87789251/e3fd8eaa-f2b0-4c81-846c-ae59f86d9d64)
#### Variations



#### Property

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

##### How to use

```ts
import ButtonPrimary from "@button/ButtonPrimary";

<ButtonPrimary>Button</ButtonPrimary>
```
![btn-primary](https://github.com/naufal-yafi/collosal-slicing-design/assets/87789251/9469e88f-17e9-4b1d-9b3f-a14d3aa08a22)

[👆 [Table of Content](#table-of-content)]

#### Button Secondary

##### How to use

```ts
import ButtonSecondary from "@button/ButtonSecondary";

<ButtonSecondary>Button</ButtonSecondary>
```

![btn-secondary](https://github.com/naufal-yafi/collosal-slicing-design/assets/87789251/e3fd8eaa-f2b0-4c81-846c-ae59f86d9d64)

[👆 [Table of Content](#table-of-content)]

### Company Logo

#### Preview

![image](https://github.com/naufal-yafi/collosal-slicing-design/assets/87789251/3f91c32a-96e2-4610-b3c2-3ded26f4b0dd)

#### How to Use

```ts
import CompanyLogo from "@component/CompanyLogo";

<CompanyLogo />
```

[👆 [Table of Content](#table-of-content)]


### Feature Card

#### Preview

![feature-card](https://github.com/naufal-yafi/collosal-slicing-design/assets/87789251/e33174ad-b336-4da7-a682-a0216b168446)

#### Property

```ts
default: {
  img: "/",
  title: "Design",
  desc: "The project interface will be designed first, our favorite tool is Figma.",
}
```

#### How to Use

```ts
import FeatureCard from "@component/FeatureCard";

// Import your icon/logo asset
import weightFigmaIcon from "@logo/weight-figma.svg";

// Determine the size
<div className="mt-12 px-32">
  <FeatureCard
    img={weightFigmaIcon}
    title="Lorem Ipsum"
    desc="Lorem ipsum dolor sit amet conseptetur."
  />
</div>
```
![result-feature-card](https://github.com/naufal-yafi/collosal-slicing-design/assets/87789251/e5e1168f-b95e-4d80-8dd4-9a35084cc2a6)

#### Custom (3-column lined layout)

```ts
import FeatureCard from "@component/FeatureCard";

// Import your icon/logo asset
import weightFigmaIcon from "@logo/weight-figma.svg";

// Determine the size
<div className="mt-12 px-32 grid grid-cols-1 lg:grid-cols-3 gap-5">
  <FeatureCard
    img={weightFigmaIcon}
    title="Lorem Ipsum"
    desc="Lorem ipsum dolor sit amet conseptetur."
  />
  <FeatureCard
    img={weightFigmaIcon}
    title="Lorem Ipsum"
    desc="Lorem ipsum dolor sit amet conseptetur."
  />
  <FeatureCard
    img={weightFigmaIcon}
    title="Lorem Ipsum"
    desc="Lorem ipsum dolor sit amet conseptetur."
  />
</div>
```

![image](https://github.com/naufal-yafi/collosal-slicing-design/assets/87789251/8aaa223e-136e-48c7-ba97-fbcf751fc941)

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
