import React from 'react'

import './style/home-page.scss'

function home() {
  return (
    <section className='home-page'>
      <img className='home-page__promo-image' src='/img/internationalHero_v4.webp' />
      <div className='home-page__wrapper'>
        <h2 className='home-page__header-main'>Welcome, International Customer</h2>
        <p className='home-page__text'>Click on&nbsp;a&nbsp;category above to&nbsp;start shopping.</p>
        <ul className='home-page__advantages-list'>
          <li className='home-page__advantages-item'>
            <h3>Welcome, International Customer</h3>
            <p>With our international partner Borderfree, you&rsquo;ll shop in&nbsp;your 
              local currency and we&rsquo;ll ship to&nbsp;you anywere in&nbsp;the world.
            </p>
          </li>
          <li className='home-page__advantages-item'>
            <h3>Shopping outside the U.S., but shipping to&nbsp;a&nbsp;U.S. address?</h3>
            <p>No&nbsp;matter where you&rsquo;re, if&nbsp;you are shippig to&nbsp;an&nbsp;address 
              inside the United States, you&rsquo;ll shop in&nbsp;your local 
              currency using our U.S. site. At&nbsp;checkout, just select &laquo;Use 
              an&nbsp;international billing address.&raquo;
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default home
