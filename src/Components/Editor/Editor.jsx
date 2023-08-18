import './Editor.css';
import PropTypes from 'prop-types';


const Editor = ({input,setInput}) => {
  return (
    <div>
        Editor<br />
        <textarea value={input} onChange={(e)=> (setInput(e.target.value))} id="editor"></textarea>   
    </div>
  )
}

Editor.propTypes = {
    input: PropTypes.string,
    setInput: PropTypes.func
}

export default Editor