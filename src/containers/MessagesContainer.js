import { connect } from 'react-redux';
import Message from 'components/Message';

import { removeMessage } from 'redux/actions/ui';
import { getAllMessages } from 'redux/selectors/ui';

function mapStateToProps(state) {
  return {
    messages: getAllMessages(state)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    remove: (payload) => dispatch(removeMessage(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Message);