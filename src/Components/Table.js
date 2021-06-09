import React from 'react';
const Table = props => {
  const label = [
    'Date',
    'Time',
    'Debit',
    'Credit',
    'Total Balance',
    'Description'
  ];
  const values = [
    '12 june',
    '12:00',
    '0',
    '500',
    '500',
    'my first transaction'
  ];

  return (
    <table>
      <tr>
        {label.map((data, index) => (
          <th key={index}>{data}</th>
        ))}
      </tr>
      <tr>
        {values.map(value => (
          <td>{value}</td>
        ))}
      </tr>
      {/* //   <th>Date</th>
      //   <th>Description</th>
      //   <th>Credit</th>
      //   <th>Debit</th>
      //   <th>Running Balance</th>
      // </tr> */}
      {/* // <tr>
      //   <td>4/8/20201</td>
      //   <td>bye</td>
      //   <td>4500</td>
      //   <td>1500</td>
      //   <td>3000</td>
      // </tr>
      // <tr>
      //   <td>5/8/20201</td>
      //   <td>hello</td>
      //   <td>47500</td>
      //   <td>3500</td>
      //   <td>2000</td>
      // </tr>

      // <tr>
      //   <td>6/8/20201</td>
      //   <td>hii</td>
      //   <td>6500</td>
      //   <td>2500</td>
      //   <td>1000</td>
      // </tr> */}

      {/* // <tr>
      //   <td>7/8/20201</td>
      //   <td>hlo</td>
      //   <td>5500</td>
      //   <td>3500</td>
      //   <td>2000</td>
      // </tr> */}
    </table>
  );
};

export default Table;
