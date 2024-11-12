import BgImg from '../public/vite.svg'
import React from 'react'

function Body() {
  return (
    <div className='h-screen bg-cover' style={{backgroundImage: `url(${BgImg})`}}></div>
  )
}

export default Body