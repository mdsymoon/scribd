import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Service from "../Service/Service";
import TopSection from "../TopSection/TopSection";
import MusicGallery from './../MusicGallery/MusicGallery';

const HomePage = () => {
  return (
    <div>
      <Header />
      <TopSection />
      <Service/>
      <MusicGallery/>
      <Footer/>
    </div>
  );
};

export default HomePage;
