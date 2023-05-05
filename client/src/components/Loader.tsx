import React from 'react'

type Props ={
    color?: string;
}
const Loader = ({color="border-white"}) => {
  return (
    <div className='flex items-center justify-center '>
        <div className={`w-6 h-6 ${color} border-l-2 border-r-2 rounded-full animate-spin `}></div>
    </div>
  )
}

export default Loader