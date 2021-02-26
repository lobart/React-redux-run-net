import s from './Nav.module.css'
import {NavLink} from "react-router-dom";
import Dialog from "../Dialogs/Dialog/Dialog";
import {getStateAction} from '../../redux/state'


const Nav = (props) => {
    let NavDataMap = props.store.dispatch(getStateAction()).navData.map( (el)=> {
            return (
                <div>
                    <NavLink to={el.url}>{el.name}</NavLink>
                </div>

            )
        }
    )
    return (
        <nav className={s.nav}>
            {NavDataMap}
        </nav>
    )
}

export default Nav;