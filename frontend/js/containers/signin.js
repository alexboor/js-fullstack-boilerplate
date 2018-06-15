import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SigninForm from '../components/SigninForm/signin';
import * as Actions from '../actions/user';

function mapStateToProps(state) {
    return {
        signin: state.signin
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SigninForm);