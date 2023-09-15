import React, { useState } from 'react';
import "./header.css";
import logo from "../../assets/logotipo.png";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
          <p><a href='#about'>About</a></p>
          <p><a href='#characters'>Characters</a></p>
          <p><a href='#faq'>FAQ</a></p>
          <p><a href='#community'>Community</a></p>
  </>
)

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='nft__navbar'>
      <div className='nft__navbar-links'>
        <div className='nft__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='nft__navbar-links_heading'>
          <p>Cryptoart</p>
        </div>
        <div className='nft__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='nft__navbar-icons'>
        <FaGithub /> <FaTwitter /> <FaInstagram />
      </div>
      <div className='nft__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />        
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='nft__navbar-menu_container scale-up-center'>
            <div className='nft__navbar-menu_container-links'>
              <Menu />
            </div>
            <div className='nft__navbar-menu_container-icons'>
                <FaGithub /> <FaTwitter /> <FaInstagram />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header