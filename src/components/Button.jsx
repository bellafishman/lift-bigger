import React from 'react'

export default function Button(props) {

    const {text, func} = props

    return (
    <button onClick={func} className='px-8 py-4 rounded-md bg-slate-950 border-[2px] 
        border-blue-400 border-solid blueShadow duration-150 mx-auto'>
            <p>{text}</p>
    </button>
    )
}
