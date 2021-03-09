import style from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


let ProfileInfo = (props) => {
    if(!props.profile){
        return (
            <Preloader/>
        )
    }
    return(<div className={style.wallpaper}>
        <div className={style.description}>
            <img className={style.userphoto} src={props.profile.photos.large ? props.profile.photos.large : 'https://homemania.ru/img/noavatar.png'}/>
            <div className={style.name}>{props.profile.fullName}</div>
            <ProfileStatus status={props.status} updateStatus = {props.updateStatus}/>
        </div>
    </div>)
}

export default ProfileInfo;