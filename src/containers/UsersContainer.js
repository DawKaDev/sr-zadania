import { connect } from 'react-redux';
import { addUsers, fetchUsers, removeUsers } from 'redux/actions/users';
import { addMessage } from 'redux/actions/ui';
import Users from "components/Users";

function mapStateToProps(state) {
  return {
    users: state.users.data,
    isLoading: state.users.isLoading,
    isError: state.users.isError,
    results: state.users.config.results
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUsers: (payload) => dispatch(fetchUsers(payload)),
    add: (payload) => dispatch(addUsers(payload)),
    remove: () => dispatch(removeUsers()),
    addMessage: (payload) => dispatch(addMessage(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);