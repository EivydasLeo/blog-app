# This is Blog Application with Next.js, Sanity, Swiper, ShadCN, next-intl and Resend

This is a blog application built with Next.js and Sanity as the content management system (CMS), integrated with localization features. The app uses Swiper for image sliding, ShadCN for form validation, next-intl for handling translations, and Resend for email functionality.

## Features

-   **Next.js Framework**: Server-side rendering (SSR) and optimized routing using the app directory structure.
-   **Sanity CMS**: Manage content and localization data, including translations for multiple languages (e.g., English and Lithuanian).
-   **next-intl Integration**: Translations are managed through next-intl, enabling dynamic localization based on the user's selected language.
-   **Swiper Integration**: Image sliding functionality implemented using Swiper for smooth, responsive image galleries.
-   **ShadCN Form Validation**: Forms are validated using ShadCN for clean and efficient client-side validation.
-   **Resend Integration**: Email functionality powered by Resend for sending emails like contact form submissions.

## Getting Started

1. `git clone https://github.com/EivydasLeo/blog-app.git`
2. cd to the `blog-app` folder and `npm install`
3. Node version `18.17.0` or later is required
4. Rename `.env.sample` to `.env.local` and change the `RESEND_ADMIN_EMAIL` value to your email address. The other environment variables are already set up for local development, so you don't need to modify them.
5. Run `npm run dev`
6. Access the application at `http://localhost:3000`, with dynamic routes for different locales (e.g., /en for English, /lt for Lithuanian)
7. To access Sanity Studio, visit `http://localhost:3000/studio`. However, you will need my authorization to access it, so please contact me.

## The Website Is Live!

https://www.GretaSka.com/
