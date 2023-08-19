import './Previewer.css';
import PropTypes from 'prop-types';
import { marked } from 'marked';



const Previewer = ({ input }) => {
const html = marked.parse(input);
const markup = {__html: html}
  return (
    <div>
    <h2>Previewer</h2><br />
    <div id="preview" dangerouslySetInnerHTML={markup}></div>   
</div>
  )
}

Previewer.propTypes = {
    input: PropTypes.string
}

export default Previewer