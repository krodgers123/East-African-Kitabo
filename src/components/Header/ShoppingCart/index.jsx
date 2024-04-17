// Sopping Cart
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './ShoppingCart.css';

export default function ShoppingCart(props) {
  const { active } = props;
  return (
    <div className={`shopping-cart ${active ? 'active' : ''}`}>
      <div className="box">
        <FontAwesomeIcon className="trash-icon" icon={faTrash} />
        <img src="image/bk6.jpg" alt="Product" />
        <div className="content">
          <h3>love Africa</h3>
          <span className="price">$4.99</span>
          <span className="quantity">qty: 9</span>
        </div>
      </div>
      <div className="box">
        <FontAwesomeIcon className="trash-icon" icon={faTrash} />
        <img src="image/bk2.jpg" alt="Product" />
        <div className="content">
          <h3>adventure of kabaka</h3>
          <span className="price">$4.99</span>
          <span className="quantity">qty: 7</span>
        </div>
      </div>
      <div className="box">
        <FontAwesomeIcon className="trash-icon" icon={faTrash} />
        <img src="image/bk1.jpg" alt="Product" />
        <div className="content">
          <h3>Lets cook</h3>
          <span className="price">$4.99</span>
          <span className="quantity">qty: 1</span>
        </div>
      </div>
    </div>
  );
}
ShoppingCart.propTypes = {
  activeShoppingCart: PropTypes.bool,
}.isRequired;
