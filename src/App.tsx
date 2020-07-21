
import React, { useEffect, useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { codeTyper, CodeTyperState } from './code-typer/code-typer';

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

function App() {
  const aceEditor = useRef<AceEditor>(null)

  const [codeTyperState, setCodeTyperState] = useState<CodeTyperState>( {
    currentCode: 'I am a devil dog\nAnd you love my saucy stick',
    endCode: 'I am the lord jesus\nAnd you hate my saucy stick',
    row: 0, col: 0
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setCodeTyperState(prev => {
        const newState = codeTyper(prev)
        aceEditor?.current?.editor?.moveCursorToPosition({row: newState.row, column:newState.col})
        return newState
      })
      
      console.log('This will run every second!');
    }, 300);
    return () => clearInterval(interval);
  }, [aceEditor]);

  return (
    <div className="App">
      <div style={{zoom:3}}>
      <AceEditor
        cursorStart={1}
        value={codeTyperState.currentCode}
        mode="javascript"
        theme="github"
        onChange={() => {}}
        name="editor"
        setOptions={{useWorker:false, showLineNumbers:false,showGutter:false}}
        ref={aceEditor}
      />
      </div>

    </div>
  );
}


export default App;
