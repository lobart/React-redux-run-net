import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getMyProfile, getMyStatus, getProfile, setUserProfile, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {getAuthUserData} from "../../redux/auth-reducer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    authUserId: state.auth.userId
})

class ProfileContainer extends React.Component{

    componentDidMount() {
        let uID=this.props.match.params.userID;
        if (!uID) uID=this.props.authUserId;
        console.log("Mount");
        this.props.getProfile(uID);
        this.props.getMyStatus(uID);
    }
    componentWillUnmount(){
        console.log("Unmount")
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.match.params.userID !== this.props.match.params.userID){
            this.props.getProfile(this.props.match.params.userID);
        }
    }
    render() {
        return (
            <div>
                <Profile {...this.props} profile = {this.props.profile} status = {this.props.status} updateStatus = {this.props.updateStatus} />
            </div>
        )

    }
}
export default compose (
    connect(mapStateToProps, {
        setUserProfile,
        getProfile,
        getMyProfile,
        getMyStatus,
        updateStatus,
        getAuthUserData
    }),
    withAuthRedirect,
    withRouter
) (ProfileContainer);
