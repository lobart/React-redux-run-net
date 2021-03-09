import React from "react";
import {connect} from "react-redux";
import {setProfileHeader, setUserInfo, setUserPhoto} from "../../redux/header-reducer";
import Header from "./Header";
import {getAuthUserData, logout} from "../../redux/auth-reducer";

let mapStateToProps = (state) => ({
    userPhoto: state.headerPage.userPhoto,
    isAuth: state.auth.isAuth,
    login: state.auth.login

})

class HeaderContainer extends React.Component{
    componentDidMount() {
        this.props.setProfileHeader();

    }
    render(){
        return (
            <Header {...this.props} login = {this.props.login} photo = {this.props.userPhoto}/>
        )
    }
}

export default connect(mapStateToProps, {
    setUserInfo,
    setUserPhoto,
    setProfileHeader,
    logout
})(HeaderContainer);