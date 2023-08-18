import { useState } from 'react'
import './App.css'

import Editor from './Components/Editor/Editor.jsx';
import Previewer from './Components/Previewer/Previewer.jsx';


function App() {
  const [layout, setLayout] = useState("both")

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
     {(layout === "both"|| layout === "editor") && <Editor />}
     <button onClick={() => changeLayout()}>Change layout</button>
     {(layout === "both"|| layout === "previewer") && <Previewer />}
    </>
  )
}

export default App
