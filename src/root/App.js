import React from 'react'
import { Switch, Route } from 'react-router-dom'

import home from '../components/pages/home'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

import './page-wrapper.scss'

function App() {
  return (
    <div className='page-wrapper'>
      <Header />
      <Switch>
        <Route exact path='/' component={home}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
