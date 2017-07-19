import { connect } from 'react-redux';

import { login, logout, signup } from '../../actions/session_actions';
import ModalSession from './modal_session.jsx';


const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  };
};
//location is a prop from react router
const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1); // /login
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalSession);
