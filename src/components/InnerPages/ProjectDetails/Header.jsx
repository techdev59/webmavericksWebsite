<<<<<<< HEAD
import React, { useEffect } from 'react';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

function Header() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <header className="proj-header1">
      <div className="container mb-50">
        <div className="row">
          <div className="col-lg-6">
            <div className="caption md-mb50">
              <h1>Luxury digital products </h1>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-end align-items-end">
            <div className="info row">
              <div className="col-sm-6">
                <div className="item mb-30">
                  <h6 className="fz-16">Category</h6>
                  <span className="sub-title ls1">digital products </span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="item mb-30">
                  <h6 className="fz-16">Customer</h6>
                  <span className="sub-title ls1">ThemesCamp</span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="item mb-30">
                  <h6 className="fz-16">Date</h6>
                  <span className="sub-title ls1">August 6, 2020</span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="item mb-30">
                  <h6 className="fz-16">Location</h6>
                  <span className="sub-title ls1">Jaipur, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-img" data-background="/dark/assets/imgs/works/projects/1/banner.png"></div>
    </header>
  )
}

=======
import React, { useEffect } from 'react';
//= Scripts
import loadBackgroudImages from '@/common/loadBackgroudImages';

function Header() {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <header className="proj-header1">
      <div className="container mb-50">
        <div className="row">
          <div className="col-lg-6">
            <div className="caption md-mb50">
              <h1>Luxury digital products </h1>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-end align-items-end">
            <div className="info row">
              <div className="col-sm-6">
                <div className="item mb-30">
                  <h6 className="fz-16">Category</h6>
                  <span className="sub-title ls1">digital products </span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="item mb-30">
                  <h6 className="fz-16">Customer</h6>
                  <span className="sub-title ls1">ThemesCamp</span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="item mb-30">
                  <h6 className="fz-16">Date</h6>
                  <span className="sub-title ls1">August 6, 2020</span>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="item mb-30">
                  <h6 className="fz-16">Location</h6>
                  <span className="sub-title ls1">Jaipur, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-img" data-background="/dark/assets/imgs/works/projects/1/banner.png"></div>
    </header>
  )
}

>>>>>>> 2a8764e07c23f76597450f9070008c504f861aa7
export default Header