import React from 'react'

function  Balance({mainBalance}) {
  return (
    <>
    <div className='text-center mt-5 bg-gray-500 w-44 p-3 rounded mx-auto'>
        <h2 className='text-xl font-bold text-emerald-500'>Your Balance</h2>
        <h3 className='text-2xl font-sans font-bold text-pink-500'> {mainBalance} </h3>
    </div>
    
    </>
  )
}

export default Balance