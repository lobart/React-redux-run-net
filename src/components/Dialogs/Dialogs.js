import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import MessagesContainer from "./Messages/Messages-container";


const Dialogs = (props) => {
    let DialogDataMap = props.dialogsData.map( (el)=> {
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

        </div>
    );
}



export default Dialogs;

