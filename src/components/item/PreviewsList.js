import React from 'react'

function PreviewsList(props) {
  const { getImageMain, images } = props
  
  const imageClickHandler = (evt) => getImageMain(evt.target.src)

  const previews = images.length && images.map((src, i) => (
    <li 
      className='previews-list__item' 
      key={i}
      onClick={imageClickHandler}
    >
      <img src={src} />
    </li>
  ))
  return (
    <ul className='previews-list'>
      { previews }
    </ul>
  )
}

export default PreviewsList
