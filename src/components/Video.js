import React from 'react'
import videoBG from '../assets/videoBG.mp4'

export default function Video() {
  return (
    <div className='video'>
      <video src={videoBG} autoPlay loop muted/>
    </div>
  )
}
