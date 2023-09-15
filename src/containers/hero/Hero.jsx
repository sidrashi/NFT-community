import React from 'react';
import "./hero.css";
import frame from "../../assets/frame.png";
import character from "../../assets/characters.png";
import spline1 from "../../assets/Spline 16.png";
import spline2 from "../../assets/Spline 15.png";


const Hero = () => {
  return (
      <div className='nft__hero' id='hero'>
        <div className='nft__hero-decor__spline1'>
          <img src={spline1} alt="spline1" />
        </div>
        <div className='nft__hero-content'>
          <img src={frame} alt="frame" />
          <h1>
           Discover and connect super rare NFTs
          </h1>
          <p>
           Digital marketplace for crypto collectibles and NFTs. Buy, sell, and discover exclusive digital assets today.
          </p>
          <button type='button'>Connect Wallet</button>
          <div className='nft__hero-characters'>
            <img src={character} alt='character' />
          </div>
        </div>
        <div className='nft__hero-decor__spline2'>
          <img src={spline2} alt="spline2" />
        </div>
      </div>
  )
}

export default Hero