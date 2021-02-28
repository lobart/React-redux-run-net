import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import postReducer from "./post-reducer";
import messageReducer from "./message-reducer";
import navReducer from "./nav-reducer";
import usersReducer from "./user-reducer";

let reducers = combineReducers({
    dialogsPage : dialogsReducer,
    postsPage: postReducer,
    messagesPage : messageReducer,
    navPage : navReducer,
    usersPage : usersReducer
})
let store = createStore(reducers);
window.store = store;

export default store;

