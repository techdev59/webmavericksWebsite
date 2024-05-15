<<<<<<< HEAD
import React from 'react';
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
                <a href="#0">
                  <img src="/dark/assets/imgs/logo-light.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="copyright d-flex">
                <div className="ml-auto">
                  <p className="fz-13">© 2023 Geekfolio is Proudly Powered by <span className="underline">
                    <a href={data.author_link} target="_blank">{data.author}</a>
                  </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

=======
import React from 'react';
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
                <a href="#0">
                  <img src="/dark/assets/imgs/logo-light.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="copyright d-flex">
                <div className="ml-auto">
                  <p className="fz-13">© 2023 Geekfolio is Proudly Powered by <span className="underline">
                    <a href={data.author_link} target="_blank">{data.author}</a>
                  </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

>>>>>>> 2a8764e07c23f76597450f9070008c504f861aa7
export default Footer