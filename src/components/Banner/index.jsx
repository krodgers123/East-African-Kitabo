// Banner
import React from 'react';
import './Banner.css';

export default function Banner() {
  return (
    <section
      className="banner"
      id="banner"
      style={{
        background: 'url("../image/1.jpg") no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="content">
        <h3>
          Good and
          {' '}
          <span>classic</span>
          {' '}
          Books
        </h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
          vitae perspiciatis neque soluta.
        </p>
        <button type="button" className="btn">
          Buy Book now
        </button>
      </div>
    </section>
  );
}
