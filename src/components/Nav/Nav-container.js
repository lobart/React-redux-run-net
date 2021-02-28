import {NavLink} from "react-router-dom";
import Nav from "./Nav";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        navData:state.navPage.navData
    };
}

const NavContainer = connect(mapStateToProps)(Nav);

export default NavContainer;