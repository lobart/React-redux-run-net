import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import postReducer from "./post-reducer";
import messageReducer from "./message-reducer";
import navReducer from "./nav-reducer";

let reducers = combineReducers({
    dialogsPage : dialogsReducer,
    postsPage: postReducer,
    messagesPage : messageReducer,
    navPage : navReducer
})
let store = createStore(reducers);

export default store;