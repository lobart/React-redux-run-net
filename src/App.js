import './App.css';
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import NavContainer from './components/Nav/Nav-container'
import {BrowserRouter, Route} from "react-router-dom"
import DialogsContainer from "./components/Dialogs/Dialogs-Conteiner";
import MessagesContainer from "./components/Dialogs/Messages/Messages-container";
import UserContainer from "./components/Users/Users-Container";



const App = (props) => {
  return(
      <BrowserRouter>
      <div className='site-wrapper'>
          <Header/>
        <NavContainer store={props.store}/>
        {/*<Cont/>*/}
        <div className='site-wrapper-content'>
            <Route exact path='/dialogs' render={() =>
                <div>
                    <DialogsContainer store = {props.store} />
                    <MessagesContainer store = {props.store}/>
                </div>} />
            <Route exact path='/profile' render={() => <Content store = {props.store} />} />
            <Route exact path='/users' render={() => <UserContainer/>} />
        </div>
      </div>
      </BrowserRouter>
  );

}

export default App;


