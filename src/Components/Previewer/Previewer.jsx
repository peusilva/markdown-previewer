import './Previewer.css';
import PropTypes from 'prop-types';

const Previewer = ({ input }) => {
  return (
    <div>
    Previewer<br />
    <textarea readOnly id="previewer" value={input}></textarea>   
</div>
  )
}

Previewer.propTypes = {
    input: PropTypes.string
}

export default Previewer