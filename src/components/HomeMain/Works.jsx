<<<<<<< HEAD
import React from 'react';
//= Data
import data from '@/data/HomeMain/works.json';

function Works() {
  return (
    <section className="works thecontainer">
      {
        data.map(item => (
          <div className="panel mt-30" key={item.id}>
            <div className="item">
              <div className="img">
                <img src={item.image} alt="" />
              </div>
              <div className="cont d-flex align-items-end">
                <div>
                  <span>{item.tag}</span>
                  <h5>{item.title}</h5>
                </div>
                <div className="ml-auto">
                  <h6>{item.date}</h6>
                </div>
              </div>
              <a href="#0" className="link-overlay"></a>
            </div>
          </div>
        ))
      }
    </section>
  )
}

=======
import React from 'react';
//= Data
import data from '@/data/HomeMain/works.json';

function Works() {
  return (
    <section className="works thecontainer">
      {
        data.map(item => (
          <div className="panel mt-30" key={item.id}>
            <div className="item">
              <div className="img">
                <img src={item.image} alt="" />
              </div>
              <div className="cont d-flex align-items-end">
                <div>
                  <span>{item.tag}</span>
                  <h5>{item.title}</h5>
                </div>
                <div className="ml-auto">
                  <h6>{item.date}</h6>
                </div>
              </div>
              <a href="#0" className="link-overlay"></a>
            </div>
          </div>
        ))
      }
    </section>
  )
}

>>>>>>> 2a8764e07c23f76597450f9070008c504f861aa7
export default Works