<<<<<<< HEAD
import React, { useEffect } from 'react';
//= Scripts
import parallaxie from '@/common/parallaxie';

function Header() {
  useEffect(() => {
    parallaxie('.proj-header2.parallaxie', 0.3, 0);
  }, []);

  return (
    <header className="proj-header2 bg-img valign parallaxie" data-background="/dark/assets/imgs/works/projects/2/CarrersBanner.png" data-overlay-dark="5">
      <div className="container mt-80">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="caption text-center">
              <h1>Careers</h1>
              <h6 className="sub-title">Thinking about becoming a Indian</h6>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

=======
import React, { useEffect } from 'react';
//= Scripts
import parallaxie from '@/common/parallaxie';

function Header() {
  useEffect(() => {
    parallaxie('.proj-header2.parallaxie', 0.3, 0);
  }, []);

  return (
    <header className="proj-header2 bg-img valign parallaxie" data-background="/dark/assets/imgs/works/projects/2/7.png" data-overlay-dark="5">
      <div className="container mt-80">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="caption text-center">
              <h1>Sinzere The Mission</h1>
              <h6 className="sub-title">Digital Marketing</h6>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

>>>>>>> 2a8764e07c23f76597450f9070008c504f861aa7
export default Header