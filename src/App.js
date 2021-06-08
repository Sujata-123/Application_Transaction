import React from 'react';
import NewTransaction from './Components/NewTransaction';
import Table from './Components/Table';
import './style.css';
const App = () => {
  return (
    <div>
      <h1>Transaction Application</h1>
      <NewTransaction />
      <h1>This is transaction table</h1>
      <Table />
    </div>
  );
};
export default App;
