import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Header} from "./components/header";
import {Balance} from "./components/balance";
import {IncomeExpense} from "./components/incomeExpense";
import {TransactionList} from "./components/transactionList";
import {AddTransaction} from "./components/addTransaction";
import {GlobalProvider} from "./context/globalState";

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpense/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
