// Products
import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper.min.css';

export default function Products() {
  SwiperCore.use([Autoplay]);
  return (
    <section className="products" id="products">
      <h1 className="heading">
        our
        {' '}
        <span>Books</span>
      </h1>
      <div className="products-slider slider">
        <div className="wrapper swiper-wrapper">
          <Swiper
            loop
            spaceBetween={20}
            autoplay={{ delay: 7500, disableOnInteraction: false }}
            slidesPerView={1}
            pagination={{ clickable: true }}
            centeredSlides
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: { slidesPerView: 3 },
            }}
            style={{ padding: '1rem' }}
          >
            <SwiperSlide>
              <div className="box">
                <img src="image/1.jpg" alt="" />
                <h3>History Of East Africa</h3>
                <div className="price">$4.99/ -- 10.99/-</div>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                </div>
                <button type="button" className="btn">
                  add to cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box">
                <img src="image/bk1.jpg" alt="" />
                <h3>A dictator of East Africa</h3>
                <div className="price">$4.99/ -- 10.99/-</div>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                </div>
                <button type="button" className="btn">
                  add to cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box">
                <img src="image/bk3.jpg" alt="" />
                <h3>Kiss Me</h3>
                <div className="price">$4.99/ -- 10.99/-</div>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                </div>
                <button type="button" className="btn">
                  add to cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box">
                <img src="image/bk5.jpg" alt="" />
                <h3>Lets Cook</h3>
                <div className="price">$4.99/ -- 10.99/-</div>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                </div>
                <button type="button" className="btn">
                  add to cart
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="products-slider">
        <div className="wrapper swiper-wrapper">
          <Swiper
            loop
            spaceBetween={20}
            autoplay={{ delay: 7500, disableOnInteraction: false }}
            slidesPerView={1}
            pagination={{ clickable: true }}
            centeredSlides
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: { slidesPerView: 3 },
            }}
            style={{ padding: '1rem' }}
          >
            <SwiperSlide>
              <div className="box">
                <img src="image/ft.jpg" alt="" />
                <h3>Fitting</h3>
                <div className="price">$4.99/ -- 10.99/-</div>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                </div>
                <button type="button" className="btn">
                  add to cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box">
                <img src="image/hare.jpg" alt="" />
                <h3>The Hare</h3>
                <div className="price">$4.99/ -- 10.99/-</div>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                </div>
                <button type="button" className="btn">
                  add to cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box">
                <img src="image/phy.jpg" alt="" />
                <h3>Physics</h3>
                <div className="price">$4.99/ -- 10.99/-</div>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                </div>
                <button type="button" className="btn">
                  add to cart
                </button>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="box">
                <img src="image/bk5.jpg" alt="" />
                <h3>We love Reading</h3>
                <div className="price">$4.99/ -- 10.99/-</div>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStarHalfAlt} />
                </div>
                <button type="button" className="btn">
                  add to cart
                </button>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
