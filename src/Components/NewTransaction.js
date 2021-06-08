import React, { useState } from 'react';
const NewTransaction = () => {
  const [save, setSave] = useState();
  const [cancel, setCancel] = useState();
  const [amount, setAmount] = useState();
  const [description, setDescription] = useState();
  const saveHandler = () => {
    setSave('save');
  };

  //function to handle amount change
  const handleAmountChange = event => {
    setAmount(`Amount change ${event.target.value}`);
  };

  //function to handle description change
  const handleDescriptionChange = event => {
    setDescription(`Description change ${event.target.value}`);
  };

  //function to handle transaction type change
  const handleTransactionTypeChange = () => {};

  const cancelHandler = () => {
    setCancel('debit');
  };
  return (
    <>
      <div>
        <h1>New Transaction</h1>
      </div>
      <div>
        <select>
          <option value="transaction_type">transaction_type</option>
          <option value="Credit">Credit</option>
          <option value="Debit">Debit</option>
        </select>
      </div>
      <div>Amount</div>
      <div>
        Description
        <textarea />
      </div>

      <button onClick={saveHandler}>Save {save}</button>
      <button onClick={cancelHandler}>Cancel {cancel}</button>
    </>
  );
};
export default NewTransaction;
