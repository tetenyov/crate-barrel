import React from 'react'

function PreviewList(props) {
  const { images } = props
  const previews = images.length && images.map((src, i) => (
    <li key={i}>
      <img src={src} />
    </li>
  ))
  return (
    <ul>
      { previews }
    </ul>
  )
}

export default PreviewList
