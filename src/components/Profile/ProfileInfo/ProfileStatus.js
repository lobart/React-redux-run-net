import style from './ProfileStatus.module.css'
import * as React from "react";


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    };
    newStatusElement  =   React.createRef();
    activateEditMode = () => {
        this.setState(
            {
                editMode: true
            }
        )
    }
    deactivateEditMode = () => {
        this.setState(
            {
                editMode: false
            }
        );
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status:  e.currentTarget.value
        })

    }

    render(){
    return(
        <div>
            {!this.state.editMode &&
            <div>
                <span onDoubleClick={() => {this.activateEditMode()}} >
                    {this.props.status}
                </span>
            </div>
            }
            {this.state.editMode &&
            <div>
                <input autoFocus={true}
                       onBlur={() => {this.deactivateEditMode()}}
                       value={this.state.status}
                       onChange={this.onStatusChange}/>
            </div>
            }
        </div>

    )
}}

export default ProfileStatus;