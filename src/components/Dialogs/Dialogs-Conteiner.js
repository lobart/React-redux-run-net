import Dialogs from "./Dialogs";
import {connect} from "react-redux";




let mapStateToProps = (state) => {
    return{
        dialogsData:state.dialogsPage.dialogsData
    };
}

const DialogsContainer = connect(mapStateToProps)(Dialogs);

export default DialogsContainer;