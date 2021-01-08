import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <img src="/images/img-home.jpg"></img>
      <h1>FRANCO CANEDO</h1>
      <p>Full Stack Software Developer</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick="document.getElementById('middle').scrollIntoView();"
        >
         
          <a href="#down">MORE</a>
        </Button>
       
      </div>
    </div>
  );
}

export default HeroSection;
