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
    </table>
  );
};

export default Table;
