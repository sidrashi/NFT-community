import React from 'react';
import "./faq.css";
import { AiOutlinePlus } from "react-icons/ai"

const FAQ = () => {
  return (
    <div className='nft__faq' id='faq'>
      <div className='nft__faq-heading'>
        <h4>FAQ</h4>
        <p>Your questions, answered.</p>
      </div>
      <div className='nft__faq-content'>
        <div className='nft__faq-content__frame'>
          <p>What is an NFT?</p> <AiOutlinePlus size={30} color='#fff'/>
        </div>
        <div className='nft__faq-content__frame'>
          <p>What makes our NFT special?</p> <AiOutlinePlus size={30} color='#fff'/>
        </div>
        <div className='nft__faq-content__frame'>
          <p>Who’s the team behind our NFT?</p> <AiOutlinePlus size={30} color='#fff'/>
        </div>
        <div className='nft__faq-content__frame'>
          <p>When does minting begin?</p> <AiOutlinePlus size={30} color='#fff'/>
        </div>
        <div className='nft__faq-content__frame'>
          <p>Who can mint one?</p> <AiOutlinePlus size={30} color='#fff'/>
        </div>
      </div>
    </div>
  )
}
export default FAQ