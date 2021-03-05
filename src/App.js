import './App.css';
import NavContainer from './components/Nav/Nav-container'
import {BrowserRouter, Route} from "react-router-dom"
import DialogsContainer from "./components/Dialogs/Dialogs-Conteiner";
import MessagesContainer from "./components/Dialogs/Messages/Messages-container";
import UserContainer from "./components/Users/Users-Container";
import ProfileContainer from "./components/Profile/Profile-container";
import HeaderContainer from "./components/Header/Header-Container";



const App = (props) => {
  return(
      <BrowserRouter>
      <div className='site-wrapper'>
          <HeaderContainer/>
        <NavContainer store={props.store}/>
        {/*<Cont/>*/}
        <div className='site-wrapper-content'>
            <Route exact path='/dialogs' render={() =>
                <div>
                    <DialogsContainer store = {props.store} />
                    <MessagesContainer store = {props.store}/>
                </div>} />
            <Route path='/profile/:userID?' render={() => <ProfileContainer store = {props.store} />} />
            <Route exact path='/users' render={() => <UserContainer key='UserContainer' store = {props.store}/>} />
        </div>
      </div>
      </BrowserRouter>
  );

}

export default App;


