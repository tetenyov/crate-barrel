import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { loadVases } from '../../store/action-creators/action-creators'
import Suggestions from './Suggestions'

function Search() {
  const [query, setQuery] = useState('')
  const dispatch = useDispatch()
  
  const inputFocusHandler = () => dispatch(loadVases())
  const inputChangeHandler = (evt) => setQuery(evt.target.value)

  return (
    <form className='search-form'>
      <input className='search-form__input' type='text' 
        value={query}
        onFocus={inputFocusHandler}
        onChange={inputChangeHandler}
      /> 
      <Suggestions query={query}/>
    </form>
  )
}

export default Search
