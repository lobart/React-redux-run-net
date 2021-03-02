import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {setUserInfo, setUserPhoto} from "../../redux/header-reducer";
import Header from "./Header";

let mapStateToProps = (state) => ({
    userData:{
        id: state.headerPage.userData.id,
        login: state.headerPage.userData.login},
        userPhoto: state.headerPage.userPhoto
})

class HeaderContainer extends React.Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{withCredentials:true}).then(response => {
            this.props.setUserInfo(response.data.data)
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + this.props.userData.id).then(response => {
                this.props.setUserPhoto(response.data.photos.small)
            })
        })

    }
    render(){
        return (
            <Header {...this.props} login = {this.props.userData.login} photo = {this.props.userPhoto}/>
        )
    }
}

export default connect(mapStateToProps, {
    setUserInfo,
    setUserPhoto
})(HeaderContainer);