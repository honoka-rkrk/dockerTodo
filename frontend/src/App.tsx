import React, { useState } from 'react';
import './App.css';
import axios from "axios";

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
    </div>
  );
}

export default App;
