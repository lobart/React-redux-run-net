import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router";

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

class ProfileContainer extends React.Component{
    debugger
    componentDidMount() {

        let uID=this.props.match.params.userID;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + uID, {withCredentials: true}).then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile = {this.props.profile}/>
            </div>
        )

    }
}
let WithRouterData = withRouter(ProfileContainer);
export default connect(mapStateToProps, {
 setUserProfile
})(WithRouterData);