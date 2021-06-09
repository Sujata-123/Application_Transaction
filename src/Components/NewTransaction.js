import React, { useState } from 'react';
const NewTransaction = () => {
  const [amount, setAmount] = useState();
  const [description, setDescription] = useState();
  const [transactionType, setTransactionType] = useState();
  const [save, setSave] = useState();
  const [cancel, setCancel] = useState();
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
  const handleTransactionTypeChange = event => {
    setTransactionType(
      `Transaction Type is either debit or credit ${event.target.value}`
    );
  };

  const cancelHandler = () => {
    setCancel('debit');
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
            type="text"
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
        <button type="submit">Add Transaction </button>
      </form>
      <button>Save</button>
      <button>cancel</button>
    </>
  );
};
export default NewTransaction;
