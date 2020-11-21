import React from 'react'
import './Transaction.css'

function Transaction({detail, amount}) {
    return (
        <div className="transaction">
            <span>{detail}</span> 
            <span>{amount}</span>
        </div>
    )
}

export default Transaction
