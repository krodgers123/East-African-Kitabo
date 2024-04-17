import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar } from '@fortawesome/free-solid-svg-icons';

import './Blogs.css';

export default function Blogs() {
  return (
    <section className="blogs" id="blogs">
      <h1 className="heading">
        our
        {' '}
        <span>Book blogs</span>
      </h1>
      <div className="box-container">
        <div className="box">
          <img src="image/bk1.jpg" alt="" />
          <div className="content">
            <div className="icons">
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                by user
              </a>
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faCalendar} />
                </i>
                12th april, 2024
              </a>
            </div>
            <h3> With its user-friendly interface and seamless navigation</h3>
            <p>
              the books are good fit for  raeding Elit. lets, read.
            </p>
            <a href="/" className="btn">
              read more
            </a>
          </div>
        </div>
        <div className="box">
          <img src="image/bk2.jpg" alt="" />
          <div className="content">
            <div className="icons">
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                by user
              </a>
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faCalendar} />
                </i>
                1st April, 2024
              </a>
            </div>
            <h3>Our platform is dedicated to providing authentic East African literature</h3>
            <p>
              the books are good fit for  raeding Elit. lets, read.
            </p>
            <a href="/" className="btn">
              read more
            </a>
          </div>
        </div>
        <div className="box">
          <img src="image/bk3.jpg" alt="" />
          <div className="content">
            <div className="icons">
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                by user
              </a>
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faCalendar} />
                </i>
                21st April, 2024
              </a>
            </div>
            <h3>East African Kitabo is a treasure trove of vintage East African titles</h3>
            <p>
              the books are good fit for  raeding Elit. lets, read.
            </p>
            <a href="/" className="btn">
              read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
