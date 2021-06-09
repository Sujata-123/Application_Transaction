import React, { useState } from 'react';
const NewTransaction = () => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [transactionType, setTransactionType] = useState('Credit');
  const arr = [];
  const transactionData = {
    amount: amount,
    description: description,
    type: transactionType
  };
  const submitHandler = event => {
    arr.push(transactionData);
    console.log(arr);
    event.preventDefault();
  };
  
  // console.log(transactionData);

  //function to handle amount change
  const handleAmountChange = event => {
    setAmount(event.target.value);
  };

  //function to handle description change
  const handleDescriptionChange = event => {
    setDescription(event.target.value);
  };

  //function to handle transaction type change
  const handleTransactionTypeChange = event => {
    setTransactionType(event.target.value);
  };

  return (
    <>
      <form>
        <div>
          <h2>New Transaction</h2>
        </div>
        <div>
          <select
            value={transactionType}
            onChange={handleTransactionTypeChange}
            required
          >
            <option value="Debit">Debit</option>
            <option value="Credit">Credit</option>
          </select>
        </div>
        <div>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Amount"
            required
          />
        </div>

        <div>
          <textarea
            type="text"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Discription"
            required
          />
        </div>
        <button onClick={submitHandler}>Add Transaction </button>
      </form>
    </>
  );
};
export default NewTransaction;
