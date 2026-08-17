import React from "react";
import Hero from "../Components/Hero";
import AboutMe from "../Components/AboutMe";
import Footer from "../layout/Footer";
import WorkBadge from "../Components/WorkBadge";
import Reviews from "../Components/Reviews";
import TopProject from "../Components/TopProject";
import BlogBanner from "../blog/BlogBanner";
import NewsletterSection from "../blog/NewsletterSection";
const Home = () => {
  return (
    <div className="min-h-screen w-full pt-25">
      <Hero />
      <AboutMe />
      <TopProject />
      <Reviews />
      <BlogBanner />
      <NewsletterSection />
      <WorkBadge />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
