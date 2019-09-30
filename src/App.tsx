import React, { FC } from 'react';
import './App.scss';
import axios from 'axios';
import { Button } from 'antd';

const App: FC = () => {
  return (
    <div className="App">
      <Button
        type="primary"
        onClick={async () => {
          let id = 1;
          let res = await axios.get(`/api/customer/${id}`);
          console.warn(res);
        }}
      >
        ANTD BUTTON
      </Button>
    </div>
  );
};

export default App;
