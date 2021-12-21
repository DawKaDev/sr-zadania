import { connect } from 'react-redux';
import { fetch, add } from 'redux/actions/users';
import Users from "components/Users";

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUsers: () => dispatch(fetch()),
    add: (payload) => dispatch(add(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);