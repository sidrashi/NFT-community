import React from 'react';
import "./footer.css";
import logo from "../../assets/logotipo.png";

const Footer = () => {
  return (
    <div className='nft__footer' id='footer'>
      <div className='nft__footer-links'>
        <div className='nft__footer-logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='nft__footer-foot'>
          <p>Cryptoart</p>
        </div>
      </div>
        <div className='nft__footer-copyright'>
          <p>© 2023 <a href='www.google.com' style={{textDecoration: "underline"}}>Nathalia Lourencao</a> | Made with ❤️</p>
        </div>
    </div>
  )
}

export default Footer