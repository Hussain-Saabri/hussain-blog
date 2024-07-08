// src/pages/index.js

import React, { useRef } from 'react';
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import Demo1_antd from "../components/Demo1_antd";
import ContactForm from './ContactForm';
import ScrollToTop from '../components/ScrollToTop';

const Index = () => {
  const router = useRouter();
  const contactRef = useRef();
  const navbaref = useRef();
  const scrolltop = () => {
    console.log("here")
    navbaref.current.scrollIntoView({ behavior: "smooth" });
  };
  
  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar  navbaref={navbaref} scrollToContact={scrollToContact} />
    
      <div className="m-12 text-justify">
        <Demo1_antd />
        Next.js is a powerful and versatile React framework that has gained significant popularity in the web development community. Developed and maintained by Vercel, Next.js provides a comprehensive solution for building server-side rendered (SSR) and static web applications. It enhances the capabilities of React, making it easier for developers to create high-performance, SEO-friendly, and scalable web applications. This essay delves into the features, benefits, and use cases of Next.js, highlighting why it has become a go-to framework for modern web development.
<p>
Features of Next.js
One of the standout features of Next.js is its support for server-side rendering. Unlike traditional client-side rendered applications where the HTML content is generated on the client side, Next.js allows developers to pre-render pages on the server. This approach improves the performance and SEO of web applications by delivering fully rendered HTML to the client, resulting in faster load times and better search engine visibility. Additionally, Next.js supports static site generation (SSG), enabling developers to generate static HTML pages at build time, further enhancing performance and scalability.

Next.js also excels in its routing capabilities. With a file-based routing system, developers can create pages simply by adding files to the pages directory. This intuitive approach eliminates the need for complex routing configurations, making it easier to manage and scale applications. The framework also supports dynamic routing, allowing developers to create dynamic pages with URL parameters effortlessly.

Another notable feature of Next.js is its built-in CSS and Sass support. Developers can import CSS and Sass files directly into their components, enabling scoped and global styles. Furthermore, Next.js offers built-in support for CSS-in-JS libraries like styled-components and emotion, giving developers the flexibility to choose their preferred styling approach.

Benefits of Next.js
Next.js brings several benefits to the table, making it an attractive choice for web developers. One of the key advantages is its focus on performance. By leveraging server-side rendering and static site generation, Next.js ensures that web applications load quickly and efficiently. This performance boost not only enhances the user experience but also positively impacts search engine rankings.

Moreover, Next.js simplifies the development process by providing a rich set of features out of the box. It includes features like automatic code splitting, optimized image handling, and built-in API routes, reducing the need for additional configurations and third-party libraries. This streamlined development experience allows developers to focus on building features and delivering value to users.

Next.js also promotes scalability and maintainability. Its file-based routing system and modular architecture make it easy to organize and manage large codebases. Additionally, the framework supports incremental static regeneration (ISR), enabling developers to update static content without rebuilding the entire site. This capability is particularly useful for websites with frequently changing content, such as blogs or e-commerce platforms.

</p>
        {/* Rest of your content */}
      </div>
      <ContactForm contactRef={contactRef} />
      <ScrollToTop scrolltop={scrolltop} />
    </>
  );
};

export default Index;
