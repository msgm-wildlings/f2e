import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button
          className="App-link"
          onClick={() => {
            axios
              .get('/api/customer/getCustomer', { params: { id: 123 } })
              .then(res => {
                console.warn(res);
              });
          }}
        >
          API TEST
        </button>
      </header>
    </div>
  );
};

export default App;
