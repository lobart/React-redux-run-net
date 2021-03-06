import s from './Profile.module.css'
import MyPostsContainer from "./MyPosts/MyPosts-container";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <ul>
            <ProfileInfo profile = {props.profile} status = {props.status} updateStatus = {props.updateStatus}/>
            <MyPostsContainer store = {props.store} />
        </ul>
    )
}

export default Profile;

