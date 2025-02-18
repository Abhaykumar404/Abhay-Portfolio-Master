import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "aos/dist/aos.css";
import React from "react";
import Script from "next/script";
import NextTopLoader from "nextjs-toploader";

process.env.TZ = "Asia/Kolkata";

export const metadata: Metadata = {
  title:
    "Abhay Kumar - Software Developer | JavaScript Expert | React, Node.js, TypeScript",
  description:
    "Hire Abhay Kumar, a skilled software developer specializing in JavaScript development. Proficient in React, Node.js, TypeScript, and 25+ other JavaScript frameworks and tools such as React, Angular, Vue.js, Express.js, Next.js, NestJS, Meteor, Svelte, Ember.js, Electron, Backbone.js, Polymer, D3.js, Redux, GraphQL, Jest, Webpack, Babel, Gulp, Parcel, Mocha, Jasmine, Enzyme, and Chai. Based in roorkee uttrakahnd, I deliver high-quality solutions tailored to your needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-EZJT3KPYP6"
        ></Script>
        <Script id="google-analyrics">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-EZJT3KPYP6');
  
  `}
        </Script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className=" max-w-[1200px] 2xl:max-w-[1440px] mx-auto ">
        <Header />
        <NextTopLoader color="#000000" showSpinner={false} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
