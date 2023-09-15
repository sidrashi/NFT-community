import React from 'react';
import "./brands.css";
import { webflow, relume } from "./imports"

const Brands = () => {
  return (
    <div className='nft__brand'>
      <div>
        <img src={webflow} alt="webflow" />
      </div>
      <div>
        <img src={relume} alt="relume" />
      </div>
      <div>
        <img src={webflow} alt="webflow" />
      </div>
      <div>
        <img src={relume} alt="relume" />
      </div>
      <div>
        <img src={webflow} alt="webflow" />
      </div>
      <div>
        <img src={relume} alt="relume" />
      </div>
      <div>
        <img src={webflow} alt="webflow" />
      </div>
    </div>
  )
}

export default Brands