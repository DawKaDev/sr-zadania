import { connect } from 'react-redux';
import Notifier from 'components/Notifier';

import { getAllMessages } from 'redux/selectors/ui';
import { removeMessage } from 'redux/actions/ui';

function mapStateToProps(state) {
  return {
    messages: getAllMessages(state)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeItem: (payload) => dispatch(removeMessage(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifier);