import React from 'react'

function Banner() {
  return (
    <div className='h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end'  style={{backgroundImage:'URL(https://cdn.marvel.com/content/1x/001avn_ons_mas_dsk_01_0.jpg)'}}>
      <div className="text-white text-2xl w-full text-center bg-gray-900/60 p-4 ">Avengers Endgame</div>
    </div>
  )
}

export default Banner
