import React from "react";
import appStore from "../../images/appStore.svg";
import googlePlay from "../../images/googlePlay.svg";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#F0F2F9" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <div className="d-flex">
              <div className="flex-1">
                <div className="row">
                  <div className="col-sm-6">
                    <h6 className="py-4">About</h6>
                    <p>About Scribd</p>
                    <p>Press</p>
                    <p>Our Blog</p>
                    <p>Join our team!</p>
                    <p>Contact us</p>
                    <p>Invite friends</p>
                    <p>Gifts</p>
                    <p>Scribd for enterprise</p>
                  </div>
                  <div className="col-sm-6">
                    <h6 className="py-4">Support</h6>
                    <p>Help/FAQ</p>
                    <p>Accessibility</p>
                    <p>Purchase help</p>
                    <p>AdChoices</p>
                    <p>Publishers</p>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="row">
                  <div className="col-sm-6">
                    <h6 className="py-4">Legal</h6>
                    <p>Terms</p>
                    <p>Privacy</p>
                    <p>Copyright</p>
                    <p>Cookie Preferences</p>
                  </div>
                  <div className="col-sm-6">
                    <h6 className="py-4">Social</h6>
                    <p>Instagram</p>
                    <p>Twitter</p>
                    <p>Facebook</p>
                    <p>Pinterest</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h6 className="py-4">Get our free apps</h6>
            <img src={appStore} alt="" className="d-block mb-3" />
            <img src={googlePlay} alt="" className="d-block mb-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
