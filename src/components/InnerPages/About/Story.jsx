<<<<<<< HEAD
import React, { useEffect } from "react";
//= Scripts
import loadBackgroudImages from "@/common/loadBackgroudImages";

function Story() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  //geekfolio_nextjs/public/assets/js/client1.png
  return (
    <section className="pg-about section-padding sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div
              className="bg-img radius-10 md-mb50"
              data-background="/dark/assets/imgs/about/client1.png"
            ></div>
          </div>
          <div className="col-lg-8">
            <div
              className="bg-img radius-10"
              data-background="/dark/assets/imgs/about/walk1.png"
            ></div>
          </div>
          <div className="col-lg-4">
            <div className="sec-head mt-80">
              <h6 className="sub-title">Our Story.</h6>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="cont mt-80">
              <h4>
                At Webmavericks Softcoders Pvt Ltd, we believe in the values of
                integrity, honesty, and respect. The blend of these values can
                be observed in everything we create for our clients. Being an
                innovation-driven company, we strive to invent digital products
                and solutions that provide unmatched business & customer value
                and experience. We craft solutions that go beyond utility and
                serve as a great experience to the businesses and their
                customers in order to create unique values and persona.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
=======
import React, { useEffect } from "react";
//= Scripts
import loadBackgroudImages from "@/common/loadBackgroudImages";

function Story() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  //geekfolio_nextjs/public/assets/js/client1.png
  return (
    <section className="pg-about section-padding sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div
              className="bg-img radius-10 md-mb50"
              data-background="/dark/assets/imgs/about/client1.png"
            ></div>
          </div>
          <div className="col-lg-8">
            <div
              className="bg-img radius-10"
              data-background="/dark/assets/imgs/about/walk1.png"
            ></div>
          </div>
          <div className="col-lg-4">
            <div className="sec-head mt-80">
              <h6 className="sub-title">Our Story.</h6>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="cont mt-80">
              <h4>
                At Webmavericks Softcoders Pvt Ltd, we believe in the values of
                integrity, honesty, and respect. The blend of these values can
                be observed in everything we create for our clients. Being an
                innovation-driven company, we strive to invent digital products
                and solutions that provide unmatched business & customer value
                and experience. We craft solutions that go beyond utility and
                serve as a great experience to the businesses and their
                customers in order to create unique values and persona.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Story;
>>>>>>> 2a8764e07c23f76597450f9070008c504f861aa7
