import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { codeTyper, CodeTyperState } from './code-typer/code-typer';

function App() {
  const [codeTyperState, setCodeTyperState] = useState<CodeTyperState>( {
    currentCode: 'I am a devil dog',
    endCode: 'I am the lord jesus',
    row: 0, col: 0
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setCodeTyperState(prev => codeTyper(prev))
      console.log('This will run every second!');
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>{codeTyperState.currentCode}</p>
      </header>
    </div>
  );
}

export default App;
