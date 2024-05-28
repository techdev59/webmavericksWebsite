import React, { useEffect } from "react";

import parallaxie from "@/common/parallaxie";

function Marq() {
  useEffect(() => {
    parallaxie(".proj-header2.parallaxie", 0.3, 0);
  }, []);
  return (
    <section className="serv-marq skew ontop o-hidden">
      <div className="container-fluid">
        <div className="">
          <div className="col-12 !p-0">
            <div className=" lrg opacity-0.9">
              <header
                className="proj-header2 bg-img valign parallaxie"
                data-background="/dark/assets/imgs/works/projects/2/banner.png"
                data-overlay-dark="5"
              >
                <div className="container mt-[-90px]">
                  <div className="row justify-content-left">
                    <div className="col-lg-8">
                      <div className="caption text-left">
                        <h1 className="sub-title">
                          <strong style={{fontSize:"30px"}}>
                            WE BUILD POWERFUL SMART SOLUTIONS DELIVER TOP-NOTCH
                          </strong>
                          <br />
                          SERVICES Our high-end custom solutions and services
                          will cater to your Web and Mobile App development and
                          help your business excel. With our skilled in-house
                          solution architects, developers, and testers,
                          everything is possible. At Webmavericks Softcoders, we
                          provide top-notch AI-based solutions to help
                          businesses build powerful applications. We guarantee
                          concrete results with faster developments while
                          emphasizing the customer’s requirements. We have been
                          helping our customers across countries and industries
                          for over 9 years while maintaining our promise to
                          deliver the best solutions to outrank their
                          competitors. We believe in straightforward processes
                          with tested standards. So, what stops you from being
                          the best business in the market?
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </header>

              {/* <div className="slide-har st1 strok">
                <div className="box">
                  <div className="item">
                    <h4>Let’s Bring Business to Skylimit</h4>
 
                  </div>
                  <div className="item">
                    <h4>Let’s Bring Business to Skylimit</h4>
                  </div>
                  <div className="item">
                    <h4>Let’s Bring Business to Skylimit</h4>
                  </div>
                  <div className="item">
                    <h4>Let’s Bring Business to Skylimit</h4>
                  </div>
                  <div className="item">
                    <h4>Let’s Bring Business to Skylimit</h4>
                  </div>
                </div>
                <div className="box">
                  <div className="item">
                    <h4>Let’s Bring Business to Skylimit</h4>
                  </div>
                  <div className="item">
                    <h4>Let’s Bring Business to Skylimit</h4>
                  </div>
                  <div className="item">
                    <h4>Let’s Bring Business to Skylimit</h4>
                  </div>
                  <div className="item">
                    <h4>Let’s Bring Business to Skylimit</h4>
                  </div>
                  <div className="item">
                    <h4>Let’s Bring Business to Skylimit</h4>
                  </div>
                </div>
              </div>  */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Marq;
