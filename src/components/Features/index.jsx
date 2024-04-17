// Features
import React from 'react';
import './Features.css';

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="content">
        <h1 className="heading">
          our
          {' '}
          <span>features</span>
        </h1>
        <div className="box-container">
          <div className="box">
            <img src="image/feature-img-1" alt="" />
            <h3>Security</h3>
            <p>stay safe with our app today, classic elit, quis!</p>
            <a href="/" className="btn">read more</a>
          </div>
          <div className="box">
            <img src="image/feature-img-2.png" alt="" />
            <h3>free delivery</h3>
            <p>we safely deliever our books today, classic elit, quis!</p>
            <a href="/" className="btn">read more</a>
          </div>
          <div className="box">
            <img src="image/feature-img-3.png" alt="" />
            <h3>easy payment</h3>
            <p>easy safe payment with us today, classic elit, quis!</p>
            <a href="/" className="btn">read more</a>
          </div>
        </div>
      </div>
    </section>
  );
}
