import React from "react";
import "./Topsection.css";

const TopSection = () => {
  return (
    <div className="topSection">
      <div className="container">
        <h1 className="display-4 fw-bold">
          Endless entertainment
          <br />
          and knowledge
        </h1>
        <h6 className="my-4">Read or listen anytime, anywhere.</h6>
        <button type="button" class="btn btn-light px-5 py-2 fw-bold mb-2">
          Read free for 30 days
        </button>
        <p>Only $8.99/month after. Cancel anytime.</p>
      </div>
    </div>
  );
};

export default TopSection;
