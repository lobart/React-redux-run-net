import s from './Nav.module.css'
import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className={s.nav}>
            <div>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs">Dialogs</NavLink>
            </div>
            <div>
                <a>Profile</a>
            </div>
            <div>
                <a>About</a>
            </div>
        </nav>
    )
}

export default Nav;