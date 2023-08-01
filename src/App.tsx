import React, {useEffect} from 'react';
import { Input, initTE } from "tw-elements";
import './App.css';
import './globals.css'

import Router from "./Router";
function App() {

    useEffect(() => {
        initTE({ Input });
    }, []);

  return (
    <div className="App">
      <Router></Router>
    </div>
  );
}

export default App as React.FC;
