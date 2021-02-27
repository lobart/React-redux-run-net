import s from './Nav.module.css';
import {NavLink} from "react-router-dom";

const Nav = (props) => {
    let NavDataMap = props.navData.map( (el)=> {
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