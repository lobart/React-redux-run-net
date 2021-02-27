import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import MessagesContainer from "../../redux/Messages-container";


const Dialogs = (props) => {
    let DialogDataMap = props.store.getState().dialogsPage.dialogsData.map( (el)=> {
        return (
            <Dialog name={el.name}/>
        )
    }
    )
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {DialogDataMap}
            </div>
            <MessagesContainer store = {props.store}/>
        </div>
    );
}

export default Dialogs;