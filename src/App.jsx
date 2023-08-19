import { useState } from 'react'
import './App.css'

import Editor from './Components/Editor/Editor.jsx';
import Previewer from './Components/Previewer/Previewer.jsx';

const initialState = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`

function App() {
  const [layout, setLayout] = useState("both")
  const [input, setInput] = useState(initialState)


const changeLayout = () => {
switch (layout) {
  case "both":
    return setLayout("editor");
  
  case "editor":
    return setLayout("previewer")

  case "previewer":
    return setLayout("both");
    
  default:
  return "both"
}
}

  return (
    <>
     <h1>Markdown Previewer</h1>
     {(layout === "both"|| layout === "editor") && <Editor input={input} setInput={setInput}/>}
     <button onClick={() => changeLayout()}>Change layout</button>
     {(layout === "both"|| layout === "previewer") && <Previewer input={input} />}
    </>
  )
}

export default App
