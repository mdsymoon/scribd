import React from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LanguageIcon from "@mui/icons-material/Language";

const DrawerContainer = ({ setDrawerOpen }) => {
  return (
    <main style={{ maxWidth: 300 }}>
      <div className="p-3 border-bottom">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4>SCRIBD</h4>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </div>
        <div class="input-group input-group-sm">
          <input placeholder="Search" type="text" class="form-control" />
        </div>
      </div>
      <div className="p-3 border-bottom">
        <p className="mb-4">Explore Upload FAQ</p>
        <div>
          <h6>BROWSE BY</h6>
          <div className="d-flex">
            <div className="me-4">
              <p className="mb-0">Books</p>
              <p className="mb-0">Magazines</p>
              <p className="mb-0">Documents</p>
            </div>
            <div>
              <p className="mb-0">Audiobooks</p>
              <p className="mb-0">Podcasts</p>
              <p className="mb-0">Sheet Music</p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h6>INTERESTS</h6>
          <p className="mb-0">Career &amp; Growth</p>
          <p className="mb-0">Business</p>
          <p className="mb-0">Finance &amp; Money Management</p>
          <p className="mb-0">Politics</p>
          <p className="mb-0">Sports &amp; Recreation</p>
          <p className="mb-0">Games &amp; Activities</p>
          <p className="mb-0">Comics &amp; Graphic Novels</p>
          <p className="mb-0">Social Science</p>
          <p className="mb-0">True Crime</p>
          <p className="mb-0">Travel</p>
        </div>
      </div>
      <div className="p-3">
        <p>Download our app to read books on any device</p>
        <div className="d-flex justify-content-center mt-5">
          <IconButton>
            <TwitterIcon />
          </IconButton>
          <IconButton>
            <FacebookIcon />
          </IconButton>
          <IconButton>
            <LanguageIcon />
          </IconButton>
        </div>
      </div>
    </main>
  );
};

export default DrawerContainer;
