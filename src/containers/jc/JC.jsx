import React from 'react';
import "./jc.css";
import frame from "../../assets/frame.png"
import jc from "../../assets/jc.png"
import { RiDiscordFill, RiTwitterLine } from "react-icons/ri"

const JC = () => {
  return (
    <div className='nft__jc' id='jc'>
      <img src={frame} alt="frame" />
      <h4>Join the community</h4>
      <p>Join our Discord channel or follow us on Twitter keep up to date with our latest work and announcements.</p>
      <img src={jc} alt="join community" />
      <div className='nft__jc-button'>
        <button type='button'className='discord'>< RiDiscordFill size={20} />Join Discord</button>
        <button type='button' className='twitter'>< RiTwitterLine size={20} />Follow Twitter</button>
      </div>
    </div>
  )
}

export default JC