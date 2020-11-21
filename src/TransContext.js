import React, {createContext, useReducer} from 'react'
import TransactionReducer from './TransReducer'

const initialTransactions=[
    {amount:+500, detail:"Cash"},
    {amount:-40, detail:"Book"},
    {amount:-200, detail:"Camera"},
  ]

export const TransactionContext = createContext(initialTransactions);

export const TransactionProvider = ({children}) => {
    let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);

    function addTransaction(transObj){
        dispatch({
            type:"ADD_Transaction",
            payload:{
                amount: transObj.amount,
                detail: transObj.detail
            }  
        })
    } 
    return( 
        <TransactionContext.Provider
            value={{
                transactions:state,
                addTransaction
            }}
        >
            {children}
        </TransactionContext.Provider>
    )
}



