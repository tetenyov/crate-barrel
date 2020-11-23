import React from 'react'
import { Switch, Route } from 'react-router-dom'

import home from '../components/pages/home'
import vases from '../components/pages/vases'
import cart from '../components/pages/cart'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'


import './page-wrapper.scss'
import Item from '../components/item/Item'

function App() {
  return (
    <div className='page-wrapper'>
      <Header />
      <Switch>
        <Route path='/vases/:sku' component={Item}/>
        <Route path='/checkout/cart' component={cart}/>
        <Route exact path='/vases' component={vases}/>
        <Route exact path='/' component={home}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
