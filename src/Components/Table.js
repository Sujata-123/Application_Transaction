import React from 'react';
const Table = () => {
  const saveTransactionDataHandler=()=>{

  }

  return (
    <table>
      <tr>
        <th>Date</th>
        <th>Description</th>
        <th>Credit</th>
        <th>Debit</th>
        <th>Running Balance</th>
      </tr>
      <tr>
        <td>4/8/20201</td>
        <td>bye</td>
        <td>4500</td>
        <td>1500</td>
        <td>3000</td>
      </tr>
      <tr>
        <td>5/8/20201</td>
        <td>hello</td>
        <td>47500</td>
        <td>3500</td>
        <td>2000</td>
      </tr>

      <tr>
        <td>6/8/20201</td>
        <td>hii</td>
        <td>6500</td>
        <td>2500</td>
        <td>1000</td>
      </tr>

      <tr>
        <td>7/8/20201</td>
        <td>hlo</td>
        <td>5500</td>
        <td>3500</td>
        <td>2000</td>
      </tr>
    </table>
  );
};

export default Table;
