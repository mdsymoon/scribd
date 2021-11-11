import React from "react";
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
      
    </div>
  );
};

export default HomePage;
