import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";




let mapStateToProps = (state) => ({
        dialogsData:state.dialogsPage.dialogsData,
        isAuth: state.auth.isAuth
    });

export default compose(
    connect(mapStateToProps),
    withAuthRedirect
)(Dialogs);
