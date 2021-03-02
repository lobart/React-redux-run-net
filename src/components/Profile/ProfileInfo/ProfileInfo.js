import style from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";


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
        </div>
    </div>)
}

export default ProfileInfo;