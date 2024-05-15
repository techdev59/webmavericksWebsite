import React, { useState, useEffect } from 'react';
//= Modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
//= Data
import data from '@/data/MarketingAgency/clients.json';

const swiperOptions = {
  modules: [Navigation, Autoplay],
  slidesPerView: 5,
  speed: 1000,
  loop: true,
  spaceBetween: 40,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 5,
    },
  }
}

function Clients({ lightMode }) {
  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  return (
    <section className="clients-carso section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="text-center mb-50">
              <h6 className="fz-14 fw-400">More than <span className="fw-600">200+ companies</span> trusted us
                worldwide</h6>
            </div>
          </div>
        </div>
        <div className="swiper5">
          {
            loadSwiper &&
            <Swiper {...swiperOptions} id="content-carousel-container-unq-clients" className="swiper-container">
              {
                data.map((item) => (
                  <SwiperSlide key={item}>
                    <div className="item">
                      <div className="img icon-img-100">
                        <img src={`/${lightMode ? 'light' : 'dark'}${item}`} alt="" />
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          }
        </div>
      </div>
    </section>
  )
}

export default Clients;