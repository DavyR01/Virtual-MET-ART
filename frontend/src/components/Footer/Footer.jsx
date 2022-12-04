import React from "react";

function Footer() {
  return (
    // <div className="relative">
    <div className="footer bg-primary h-[10vh] flex justify-between items-center relative bottom-0 px-4 lg:px-8">
      <div className="footer-legal my-auto">
        <ul className="footer-legal-ul text-white text-xs flex flex-col ml-2 leading-5 sm:leading-6">
          <li>Conditions générales</li>
          <li>Mentions légales</li>
          <li>2022 All rights reserved</li>
        </ul>
      </div>
      <div className="footer-socials text-white w-1/3 sm:w-1/5 xl:w-52 mr-2 flex items-center justify-between">
        <a href="https://www.facebook.com/metmuseum">
          <img
            src="../../media/socials/facebook.png"
            className="footer-social-logo w-7 h-7"
            alt="facebook logo"
          />
        </a>
        <a href="https://www.youtube.com/user/metmuseum">
          <img
            src="../../media/socials/youtube.png"
            className="footer-social-logo w-7 h-7 mt-2"
            alt="youtube logo"
          />
        </a>
        <a href="https://www.instagram.com/metmuseum/">
          <img
            src="../../media/socials/instagram.png"
            className="footer-social-logo w-7 h-7"
            alt="instagram logo"
          />
        </a>
      </div>
    </div>
    // </div>
  );
}

export default Footer;
