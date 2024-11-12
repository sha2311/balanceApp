import { useState } from 'react'
import './App.css'
import BgImg from '../public/bgimg.webp'
import Balance from './component/Balance'
import Header from './component/Header'
import IncomeExpenses from './IncomeExpenses'
import TransactionList from './TransactionList'
import TransactionAdd from './TransactionAdd'

function App() {
const [transactionadd, AddBalance] = useState([])

const addTransaction = (newTransaction)=>{
  AddBalance([...transactionadd, newTransaction])
  
}

const mainBalance = () =>{
  return transactionadd.reduce((preValue , currentValue)=> preValue + currentValue.amount, 0 )
}

const incomeBalance = ()=>{
  return transactionadd 
 .filter((addManu) => 
    addManu.amount > 0
  )
 .reduce((previousValue, newTransaction) => 
    previousValue + newTransaction.amount,0
  )
}

const withdrawBalance = ()=>{
  return transactionadd
  .filter((newWithdraw) => 
  newWithdraw.amount <0
  )
  .reduce((previousValue, currentValue) => 
  previousValue + currentValue.amount, 0
  )
}

  return (
    <>
  <div className='min-h-screen bg-cover' style={{backgroundImage: `url(${BgImg})`}}>
  <Header/>
   <Balance mainBalance ={mainBalance()} />
   <IncomeExpenses income = {incomeBalance ()} withdraw = {withdrawBalance ()} />
   <TransactionList transactionadd ={transactionadd} />
   <TransactionAdd addTransaction ={addTransaction} />
  </div>
    </>
  )
}

export default App
