import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { loadVases } from '../../store/action-creators/action-creators'
import Suggestions from './Suggestions'

function Search() {
  const [query, setQuery] = useState('')
  const [suggestionsOpen, setSuggestionsOpen] = useState(false)
  const dispatch = useDispatch()
  
  const inputFocusHandler = () => dispatch(loadVases())

  const inputChangeHandler = (evt) => {
    if (evt.target.value.length > 2) {
      setSuggestionsOpen(true)
    }

    setQuery(evt.target.value)
  }

  const windowClickHandler = () => {
    if (suggestionsOpen) {
      setSuggestionsOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('click', windowClickHandler)
    
    return () => {
      window.removeEventListener('click', windowClickHandler)
    }
  })

  return (
    <form className='search-form'>
      <input className='search-form__input' type='text' placeholder='Search'
        value={query}
        onFocus={inputFocusHandler}
        onChange={inputChangeHandler}
      /> 
      { (suggestionsOpen && query.length > 2) 
          && <Suggestions query={query}/> 
      }
    </form>
  )
}

export default Search
