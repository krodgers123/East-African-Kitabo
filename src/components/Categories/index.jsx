// Categories
import React from 'react';
import './Categories.css';

export default function Categories() {
  return (
    <section className="categories" id="categories">
      <h1 className="heading">
        Books
        {' '}
        <span>categories</span>
      </h1>
      <div className="box-container">
        <div className="box">
          <img src="image/bk4.jpg" alt="" />
          <h3>Literature Books</h3>
          <p>upto 45% off</p>
          <button type="button" className="btn">shop now</button>
        </div>

        <div className="box">
          <img src="image/bk5.jpg" alt="" />
          <h3>Adventure Books</h3>
          <p>upto 45% off</p>
          <button type="button" className="btn">shop now</button>
        </div>

        <div className="box">
          <img src="image/bk6.jpg" alt="" />
          <h3>Farming Books</h3>
          <p>upto 45% off</p>
          <button type="button" className="btn">shop now</button>
        </div>

        <div className="box">
          <img src="image/bk7.jpg" alt="" />
          <h3>Cooking Books</h3>
          <p>upto 45% off</p>
          <button type="button" className="btn">shop now</button>
        </div>
      </div>
    </section>
  );
}
