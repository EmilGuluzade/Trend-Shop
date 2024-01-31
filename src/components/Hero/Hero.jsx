import React from 'react'
import "./Hero.css"
const Hero = () => {
  return (
    <section className='hero-container'>
      <div className="hero-slogan">
        <span>Find Best One In This Season 🔥</span>
      <h2>Special collection for everyone</h2>
      <a href="">Explore Now</a>
      </div>
      <div className="hero-image-container">
        <img className="hero-image" src="/public/images/hero.png" alt="" />
      </div>
    </section>
  )
}

export default Hero
