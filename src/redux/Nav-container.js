import {NavLink} from "react-router-dom";
import Nav from "../components/Nav/Nav";

const NavContainer = (props) =>
{
    let NavDataMap = props.store.getState().navPage.navData.map((el) => {
            return (
                <div>
                    <NavLink to={el.url}>{el.name}</NavLink>
                </div>

            )
        }
    )
    return(
        <Nav navData = {props.store.getState().navPage.navData} />
    )
}

export default NavContainer;