import s from './Dialogs.module.css'
import Messages from './Messages/Messages'
import Dialog from "./Dialog/Dialog";
import {getStateAction} from '../../redux/state'


const Dialogs = (props) => {
    let DialogDataMap = props.store.dispatch(getStateAction()).dialogsData.map( (el)=> {
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
            <Messages store = {props.store}/>
        </div>
    );
}

export default Dialogs;