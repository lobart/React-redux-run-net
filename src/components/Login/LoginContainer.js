import React from 'react';
import Login from "./Login";
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";

class LoginContainer extends React.Component {
    render(){
        return (
            <Login {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    email: state.auth.email,
    password: state.auth.password,
    rememberMe: state.auth.rememberMe,
    isAuth: state.auth.isAuth
})

export default connect (mapStateToProps, {
    login,
    logout}
)(LoginContainer)