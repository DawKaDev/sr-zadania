import { connect } from 'react-redux';
import Message from 'components/Message';

function mapStateToProps(state) {
  return {
    messages: state.ui.messages
  }
}

export default connect(mapStateToProps)(Message);