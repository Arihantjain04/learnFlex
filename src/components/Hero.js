import React from 'react'

import "./styles/Hero.scss"
import "./styles/colors.scss"

import heroImg from "../assets/heroImg.png"

export default function Hero() {
  return (
    <div className='hero'>
      <div className='left-hero'>
            <h1>
                Unlock Your Learning Potential with <span>LearnXpert</span>.
            </h1>
            <p>Embrace life's vastness, venture forth, and discover the wonders waiting beyond. The world beckons; seize its grand offerings now!</p>
            <div>
                <button type="button hero-buttons" class="btn btn-light" style={{backgroundColor: '#EC5C2E',color: "#252B42", borderColor: '#EC5C2E', fontWeight: '500'}}>Join Class</button>
                <button type="button hero-buttons" class="btn btn-light" style={{color: "#252B42", fontWeight: '500'}}>Get Started</button>
            </div>
      </div>
      <div className='right-hero'>
            <img src={heroImg} alt="" />
      </div>
    </div>
  )
}
