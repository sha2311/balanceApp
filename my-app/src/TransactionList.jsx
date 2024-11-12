import React from 'react'

function TransactionList({transactionadd}) {
  return (
    <>
      <ul className='list-none mx-auto'>
        {transactionadd.map((newAdd) => (

          <li key={Math.random()} className={`${newAdd.amount > 0 ? "bg-green-300" : "bg-red-300" } px-5 py-1 mt-2 mx-5 font-semibold`}>
              {newAdd.text}

              <span className='float-right'> {newAdd.amount} Tk </span>

          </li>

        ))}
      </ul>

    </>
  )
}

export default TransactionList