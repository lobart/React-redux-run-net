import s from './Dialogs.module.css'
import Messages from './Messages/Messages'
import Dialog from "./Dialog/Dialog";



const Dialogs = (props) => {
    let DialogDataMap = props.dialogs.map( (el)=>{
        return(
            <Dialog name = {el.name}/>
        )
    }

    )
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {DialogDataMap}
            </div>
            <Messages/>
        </div>
    );
}

export default Dialogs;