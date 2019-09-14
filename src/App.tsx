import React from 'react';
import './App.css';
import axios from 'axios';
import { Button } from 'antd';

const App: React.FC = () => {
  return (
    <div className="App">
      <Button
        onClick={() => {
          let id = 1;
          axios.get(`/api/customer/${id}`).then(res => {
            console.warn(res);
          });
        }}
      >
        ANTD BUTTON
      </Button>
    </div>
  );
};

export default App;
