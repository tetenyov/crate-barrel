import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../components/pages/home'
import Vases from '../components/pages/vases'
import Cart from '../components/pages/cart'
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
        <Route path='/checkout/cart' component={Cart}/>
        <Route exact path='/vases' component={Vases}/>
        <Route exact path='/' component={Home}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
