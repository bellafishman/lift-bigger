import React from 'react'
import Button from './Button'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center
    justify-center text-center max-w-[900px] w-full mx-auto p-8'>
        <div className='flex flex-col gap-4'>
            <p>Make Everything Into</p>
            <h1 className='uppercase font-bold text-5xl
            sm:text-6xl md:text-7xl lg:text-8xl'>
                Light <span className='text-blue-400'>Work</span></h1> 
        </div>
        <p className='text-sm md:tex-base font-light'>Get those <span className='text-blue-400
        font-medium'>muscles you've been dreaming of </span>
            through a personalized training program. Make every pull up, squat, 
            and deadlight into <span className='text-blue-400
        font-medium'>Light Work</span>.
        </p>
        <Button func={() => {
          window.location.href = '#generate'
        }} text={"Accept & Begin"}></Button>

    </div>
  )
}
