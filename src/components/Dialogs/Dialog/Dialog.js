import s from './Dialog.module.css'
import {NavLink} from "react-router-dom";
const Dialog = (props) => {
    return(
        <div>
        <NavLink to={"/dialogs/"+props.name} className={s.dialog}>
            {props.name}
        </NavLink>
        </div>
    )
}
export default Dialog;