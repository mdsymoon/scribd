import "./MusicGallery.css";
import React from "react";
import galleryImg1 from "../../images/music-gallary-1.png";
import galleryImg2 from "../../images/music-gallary-2.png";
import galleryImg3 from "../../images/music-gallary-3.png";
import galleryImg4 from "../../images/music-gallary-4.png";
import galleryImg5 from "../../images/music-gallary-5.png";
import galleryImg6 from "../../images/music-gallary-6.png";
import galleryImg7 from "../../images/music-gallary-7.png";
import galleryImg8 from "../../images/music-gallary-8.png";
import galleryImg9 from "../../images/music-gallary-9.png";
import galleryImg10 from "../../images/music-gallary-10.png";
import galleryImg11 from "../../images/music-gallary-11.png";

import partner1 from "../../images/partner-1.svg";
import partner2 from "../../images/partner-2.svg";
import partner3 from "../../images/partner-3.svg";
import partner4 from "../../images/partner-4.svg";
import partner5 from "../../images/partner-5.svg";

const MusicGallery = () => {
  return (
    <main>
      <div className="MusicGallery">
        <div className="container">
          <div className="d-flex flex-column justify-content-center">
            <h2 className="text-white text-center mb-0">
              THE BEST BOOKS AND AUDIOBOOKS ARE WAITING FOR YOU
            </h2>
            <div className="imgContainer">
              <img src={galleryImg1} alt="" />
              <img src={galleryImg2} alt="" />
              <img src={galleryImg3} alt="" />
              <img src={galleryImg4} alt="" />
              <img src={galleryImg5} alt="" />
              <img src={galleryImg6} alt="" />
              <img src={galleryImg7} alt="" />
              <img src={galleryImg8} alt="" />
              <img src={galleryImg9} alt="" />
              <img src={galleryImg10} alt="" />
              <img src={galleryImg11} alt="" />
            </div>
            <button
              type="button"
              className="btn btn-info text-white fw-bold mx-auto"
            >
              Read Free for 30 days
            </button>
            <p className="text-white text-center mt-3">Cancel anytime.</p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center my-2">IN THE PRESS</p>
        <div className="container d-flex flex-wrap justify-content-evenly">
          <img src={partner1} alt="" className="mb-3" />
          <img src={partner2} alt="" className="mb-3" />
          <img src={partner3} alt="" className="mb-3" />
          <img src={partner4} alt="" className="mb-3" />
          <img src={partner5} alt="" className="mb-3" />
        </div>
      </div>
    </main>
  );
};

export default MusicGallery;
