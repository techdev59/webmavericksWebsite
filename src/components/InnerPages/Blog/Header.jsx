<<<<<<< HEAD
import React from 'react';

function Header({ data }) {
  return (
    <header className="page-header section-padding pb-0">
      <div className="container mt-80">
        <div className="row">
          <div className="col-lg-8">
            <div className="caption">
              <h6 className="sub-title">{data.subTitle}</h6>
              <h1 className="fz-80">{data.title}</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

=======
import React from 'react';

function Header({ data }) {
  return (
    <header className="page-header section-padding pb-0">
      <div className="container mt-80">
        <div className="row">
          <div className="col-lg-8">
            <div className="caption">
              <h6 className="sub-title">{data.subTitle}</h6>
              <h1 className="fz-80">{data.title}</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

>>>>>>> 2a8764e07c23f76597450f9070008c504f861aa7
export default Header