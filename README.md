# Code Typer

Installing

`npm install code-typer'

Usage

```
let codeTyperState: CodeTyperState = {
  row:0,
  col:14,
  currentCode: ['if (hello === 5) {','console.log("hello")','}',''].join('\n'),
  endCode: ['if (hello === 6) {','console.log("hello")','}',''].join('\n'),
  
}
const codeTyperStateFirst = codeTyper(codeTyperState)
const codeTyperStateSecond = codeTyper(codeTyperFirst)
```

Result

```
codeTyperStateFirst = {
  row: 0,
  col: 13,
  currentCode: 'if (hello === ) {\nconsole.log('hello')\n}\n',
  endCode: 'if (hello === 6) {\nconsole.log('hello')\n}\n',
}
codeTyperStateSecond = {
  row: 0,
  col: 14,
  currentCode: 'if (hello === 6) {\nconsole.log('hello')\n}\n',
  endCode: 'if (hello === 6) {\nconsole.log('hello')\n}\n',
}

```


