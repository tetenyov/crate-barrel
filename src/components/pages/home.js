import React from 'react'

import Advantages from '../advantages/Advantages'

function Home() {

  return (
    <section className='home-page'>
      <img className='home-page__promo-image' src='/img/internationalHero_v4.webp' />
      <div className='home-page__wrapper'>
        <h2 className='home-page__heading-main'>Welcome, International Customer</h2>
        <p className='home-page__text'>Click on&nbsp;a&nbsp;category above to&nbsp;start shopping.</p>
        <Advantages />
      </div>
    </section>
  )
}

export default Home
