import React from "react";
//= Data
import data from "@/data/app-data.json";

function Footer() {
  return (
    <footer>
      <div className="sub-footer pt-40 pb-40 ontop sub-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="logo">
                {/* <a href="#0">
                  <img src="/dark/assets/imgs/logo-light.png" alt="" />
                </a> */}
                <a href="https://www.linkedin.com" target="_blank" style={{marginRight:"10px"}}>
                  LinkedIn
                </a>
                <a href="https://www.facebook.com" target="_blank" style={{marginRight:"10px"}}>
                  Facebook
                </a>
                <a href="/sitemap" target="_blank" style={{marginRight:"10px"}}>
                  Sitemap
                </a>
                <a href="https://www.instagram.com" target="_blank">
                  Instagram
                </a>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="copyright d-flex">
                <div className="ml-auto">
                  <p className="fz-13">
                    © 2023 Copyright Protected by Softcoders Team{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
