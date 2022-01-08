import { connect } from 'react-redux';
import { addMessage } from 'redux/actions/ui';

import ContactForm from 'components/ContactForm';

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    addMessage: (payload) => dispatch(addMessage(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);