import React, { useState } from 'react';
import './App.css';
import axios from "axios";
import Todo from './Todo/Component/main';

function App() {
  const [data, setData] = useState(null);
  const getApi = async () => {
    const res = await axios.get("http://localhost:8080");
    setData(res.data);
  }
  getApi();
  return (
    <div className="App">
      {data}
      <Todo />
    </div>
  );
}

export default App;
