import React, { useState } from 'react'
import Listview from '../COMPONENTS/Listview'
import Modelpops from '../COMPONENTS/Modelpop'
import AddButton from '../COMPONENTS/Addbutton'

const Expense = () => {
    const a = 9;
    const [expenseData, setExpenseData] = useState([
        {
            category: 'Groceries',
            amount: 100.00,
            date: '2024-07-01',
            description: 'Weekly grocery shopping',
            paymentMethod: 'Credit Card'
        },
        {
            category: 'Rent',
            amount: 1500.00,
            date: '2024-07-01',
            description: 'Monthly apartment rent',
            paymentMethod: 'Bank Transfer'
        },
        {
            category: 'Utilities',
            amount: 200.00,
            date: '2024-07-02',
            description: 'Electricity and water bill',
            paymentMethod: 'Credit Card'
        },
        {
            category: 'Transportation',
            amount: 50.00,
            date: '2024-07-03',
            description: 'Gas for the car',
            paymentMethod: 'Cash'
        },
        {
            category: 'Entertainment',
            amount: 75.00,
            date: '2024-07-04',
            description: 'Movie tickets',
            paymentMethod: 'Debit Card'
        }
    ])



    return (

        <>
            <h1>main page</h1>
           
            <Listview expenseData={expenseData }  setExpenseData={setExpenseData}/>
           
        </>
    )
}

export default Expense