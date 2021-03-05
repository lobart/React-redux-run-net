import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import navReducer from "./nav-reducer";
import usersReducer from "./user-reducer";
import headerReducer from "./header-reducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    dialogsPage : dialogsReducer,
    profilePage: profileReducer,
    messagesPage : messageReducer,
    navPage : navReducer,
    usersPage : usersReducer,
    headerPage : headerReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;

