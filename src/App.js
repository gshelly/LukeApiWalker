import Form from './Components/Form';
import { Router } from '@reach/router';
import Result from './Components/Result'
import React, { useState } from 'react';
import Error from './Components/Error';
import './App.css';

function App() {
  const [result, setResult] = useState([])

  return (
    <div className="App">
      <Form setResult={setResult} />
      <Router>
        <Result path="/:id" result={result} />
        <Error path="/error" />
      </Router>
    </div>
  );
}

export default App;
