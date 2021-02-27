const ADD_DIALOG = 'ADD-DIALOG';

const dialogsReducer = (state, action) => {
    switch(action.type){
        case ADD_DIALOG:
        let newDial = {
            id: 4,
            name : action.dialog
        }
        state.dialogsData.push(newDial)
        return state;
        default: return state;
    }
}

export let addDialogAction = (text) => {
    return(
        {type: ADD_DIALOG, text:text}
    )
}

export default dialogsReducer;