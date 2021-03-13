import style from './ProfileStatus.module.css'
import * as React from "react";
import { useState, useEffect } from 'react';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)

    useEffect( () => {
        setStatus(props.status)
    }, [props.status])

    let activateEditMode = () => {
        setEditMode(true);
    }
    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return(
        <div>
            {!editMode &&
            <div className={style.inputStatus}>
                <span onDoubleClick={() => {activateEditMode()}} >
                    {status}
                </span>
            </div>
            }
            {editMode &&
            <div className={style.inputStatusEdit}>
                <input autoFocus={true}
                       onBlur={() => {deactivateEditMode()}}
                       value={status}
                       onChange={onStatusChange}/>
            </div>
            }
        </div>

    )
}

export default ProfileStatusWithHooks;