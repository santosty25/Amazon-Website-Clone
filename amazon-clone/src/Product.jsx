import React from 'react'
import './Product.css'

function Product() {
  return (
    <div className="Product">
      <div className="product__info">
        <p>The lean startup</p>
        <p className="product__price">
            <small>$</small>
            <strong>19.99</strong>
        </p>
        <div className="product__rating">
            <p>🌟</p>
            <p>🌟</p>
            <p>🌟</p>
        </div>
      </div>
      <img 
        src="https://m.media-amazon.com/images/I/71sxTeZIi6L._SL1500_.jpg" 
        alt=""
      />
    </div>
  )
}

export default Product
