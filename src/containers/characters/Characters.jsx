import React from 'react';
import "./characters.css";
import spline1 from "../../assets/spline3.png";
import spline2 from "../../assets/spline4.png";
import spline3 from "../../assets/spline5.png";
import { BiChevronLeftCircle, BiChevronRightCircle } from "react-icons/bi";
import monkey1 from "../../assets/monkey1.png"; 
import monkey2 from "../../assets/monkey2.png"; 
import monkey3 from "../../assets/monkey3.png"; 
import monkey4 from "../../assets/monkey4.png";

const Characters = () => {
  return (
      <div className='nft__characters' id='characters'>
        <div className='nft__characters-spline'>
          <img src={spline1} alt="spline1" />
          <img className='spline2' src={spline2} alt="spline2" />
          <img src={spline3} alt="spline3" />
        </div>
        <div className='nft__characters-content'>
          <div className='nft__characters-content__top'>
            <div className='nft__characters-content___heading'>
              <h4>Find your</h4>
              <h3>Favourite character</h3>
            </div>
            <div className='nft__characters-content__icons'>  
                < BiChevronLeftCircle size={30}/>
                < BiChevronRightCircle size={30}/>
            </div>
          </div>
          <div className='nft__characters-content__character'>
            <div className='nft__characters-content__character1'>
              <div className='nft__characters-content__frame1'>
                <h5>A.</h5>
                <p>Monkey Icon</p>
              </div>
              <div className='nft__characters-content__frame2_1'>
                <img src={monkey1} alt="monkey2" />
              </div>
              <div className='nft__characters-content__frame3'>
                <div className='nft__characters-content__frame3_1'>
                  <h6>12h:10m:23s</h6>
                  <p>Remaning Time</p>
                </div>
                <div className='nft__characters-content__frame3_2'>
                  <h6>18.87 ETH</h6>
                  <p>Highest bid</p>
                </div>
              </div>
            </div>
            <div className='nft__characters-content__character1'>
              <div className='nft__characters-content__frame1'>
                <h5>B.</h5>
                <p>Monkey Icon</p>
              </div>
              <div className='nft__characters-content__frame2_2'>
                <img src={monkey2} alt="monkey2" />
              </div>
              <div className='nft__characters-content__frame3'>
                <div className='nft__characters-content__frame3_1'>
                  <h6>12h:10m:23s</h6>
                  <p>Remaning Time</p>
                </div>
                <div className='nft__characters-content__frame3_2'>
                  <h6>18.87 ETH</h6>
                  <p>Highest bid</p>
                </div>
              </div>
            </div>
            <div className='nft__characters-content__character1'>
              <div className='nft__characters-content__frame1'>
                <h5>C.</h5>
                <p>Monkey Icon</p>
              </div>
              <div className='nft__characters-content__frame2_3'>
                <img src={monkey3} alt="monkey3" />
              </div>
              <div className='nft__characters-content__frame3'>
                <div className='nft__characters-content__frame3_1'>
                  <h6>12h:10m:23s</h6>
                  <p>Remaning Time</p>
                </div>
                <div className='nft__characters-content__frame3_2'>
                  <h6>18.87 ETH</h6>
                  <p>Highest bid</p>
                </div>
              </div>
            </div>
            <div className='nft__characters-content__character1'>
              <div className='nft__characters-content__frame1'>
                <h5>D.</h5>
                <p>Monkey Icon</p>
              </div>
              <div className='nft__characters-content__frame2_4'>
                <img src={monkey4} alt="monkey4" />
              </div>
              <div className='nft__characters-content__frame3'>
                <div className='nft__characters-content__frame3_1'>
                  <h6>12h:10m:23s</h6>
                  <p>Remaning Time</p>
                </div>
                <div className='nft__characters-content__frame3_2'>
                  <h6>18.87 ETH</h6>
                  <p>Highest bid</p>
                </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
  )
}

export default Characters