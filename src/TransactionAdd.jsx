import React, { useState } from 'react'

function TransactionAdd({addTransaction}) {

  const [text, submitText] = useState("");
  const [amount, submitAmount] = useState(0);

  const textCng = (e)=>{
    submitText(e.target.value)
  }

  const submitCng = (e)=>{
    submitAmount(e.target.value)
  }

  const handleSubmit = (event)=>{
    event.preventDefault()

    addTransaction({text, amount: +amount})

    submitText("")
    submitAmount(0)

  }
 
  

  return (
    <>
    <form onSubmit={handleSubmit} className='flex flex-col items-center mt-10'>
        <input type="text" onChange={textCng} value={text} className='p-2 rounded m-2 border border-indigo-500' placeholder='please add details' />
        <input type='number' onChange={submitCng} value={amount} className='p-2 rounded m-2 border border-indigo-500' placeholder='please add details' />
        <button type="submit" className='bg-blue-500 text-white p-2 rounded'>Add Transaction</button>
    </form>
    
    </>
  )
}

export default TransactionAdd