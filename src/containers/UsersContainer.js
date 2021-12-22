import { connect } from 'react-redux';
import { fetch, add, fetchUsers as fetchTest } from 'redux/actions/users';
import Users from "components/Users";

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAll: () => dispatch(fetch()),
    add: (payload) => dispatch(add(payload)),
    fetchTest: () => dispatch(fetchTest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);