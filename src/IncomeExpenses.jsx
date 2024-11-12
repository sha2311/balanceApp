import React from 'react'

function IncomeExpenses({income, withdraw}) {
  return (
   <>
   <div className='flex justify-between mx-10 mt-4 p-2'>
        <div className='text-center'>
            <h2 className='md:text-xl text-sm font-bold text-emerald-500'>Income</h2>
            <p className='text-2xl font-sans font-bold text-white'> {income} </p>
        </div>
        <div className='text-center'>
            <h2 className='md:text-xl text-sm  font-bold text-emerald-500'>Withdraw <span className='text-sm'> (Ex: <span className='text-red-500'>-</span>100)</span></h2>
            <p className='text-2xl font-sans font-bold text-white'> {withdraw} </p>
        </div>
   </div>
   </>
  )
}

export default IncomeExpenses