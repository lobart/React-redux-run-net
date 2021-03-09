import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import navReducer from "./nav-reducer";
import usersReducer from "./user-reducer";
import headerReducer from "./header-reducer";
import thunkMiddleware from "redux-thunk"
import authReducer from "./auth-reducer";

import {reducer as formReducer} from 'redux-form'
import appReducer from "./app-reducer";

let reducers = combineReducers({
    dialogsPage : dialogsReducer,
    profilePage: profileReducer,
    messagesPage : messageReducer,
    navPage : navReducer,
    usersPage : usersReducer,
    headerPage : headerReducer,
    auth : authReducer,
    form : formReducer,
    app: appReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;

