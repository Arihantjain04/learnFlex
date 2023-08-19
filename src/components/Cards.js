import React from 'react'
import "./styles/Cards.scss"

import icon1 from "../assets/Icon Box.png"

export default function Cards() {
  return (
    <div className='cards'>
      <div class="card" style={{width: '18rem'}}>
        <img className='card-icons' src={icon1} alt="" />
    <div class="card-body">
        <h5 class="card-title">Learn more skills</h5>
        <p class="card-text">The gradual accumulation of 
    information about atomic.</p>
    </div>
    </div>

      <div class="card" style={{width: '18rem'}}>
        <img className='card-icons' src={icon1} alt="" />
    <div class="card-body">
        <h5 class="card-title">Learn more skills</h5>
        <p class="card-text">The gradual accumulation of 
    information about atomic.</p>
    </div>
    </div>

      <div class="card" style={{width: '18rem'}}>
        <img className='card-icons' src={icon1} alt="" />
    <div class="card-body">
        <h5 class="card-title">Learn more skills</h5>
        <p class="card-text">The gradual accumulation of 
    information about atomic.</p>
    </div>
    </div>

    </div>
  )
}
