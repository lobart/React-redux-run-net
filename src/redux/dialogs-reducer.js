const ADD_DIALOG = 'ADD-DIALOG';

let initialState = {
    dialogsData:
        [{"name" : 'Archi', "id":1},
            {"name" : 'Roma', "id":2},
            {"name" : 'Lex', "id":3}]
}

const dialogsReducer = (state = initialState, action) => {
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