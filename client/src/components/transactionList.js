import React, {useContext, useEffect} from 'react';
import {GlobalContext} from "../context/globalState";
import {Transaction} from "./transaction";

export const TransactionList = () => {
    const {transactions, getTransactions} = useContext(GlobalContext);
    
    useEffect(()=>{
        getTransactions();
        // eslint-disable-next-line
    },[]);
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                <ul className="list">
                    {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
                </ul>
            </ul>
        </>
    )
};
