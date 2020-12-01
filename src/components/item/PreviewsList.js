import React from 'react'

import { getPreviewClassName } from '../../util/util'

function PreviewsList(props) {
  const { imageMain, getImageMain, images } = props
  
  const imageClickHandler = (evt) => {
    getImageMain(evt.target.src)
  }

  const previews = images.length && images.map((src, i) => {

    return (
      <li 
        className={getPreviewClassName(imageMain, src)} 
        key={i}
        onClick={imageClickHandler}
      >
        <img className='previews-list__image' src={src} />
      </li>
    )
  })

  return (
    <ul className='previews-list'>
      { previews }
    </ul>
  )
}

export default PreviewsList
