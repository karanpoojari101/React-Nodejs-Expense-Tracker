import React, {useState, useContext} from 'react'
import {GlobalContext} from "../context/globalState";

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        };
        console.log(newTransaction);

        addTransaction(newTransaction);
    };

    return (
        <>
            <h3>Add new transaction</h3>
            <form>
                <div className="form-group">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-group">
                    <label htmlFor="amount"
                    >Amount <br />
                        (negative - expense, positive - income)</label
                    >
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn" onClick={(e)=>onSubmit(e)}>Add transaction</button>
            </form>
        </>
    )
}
