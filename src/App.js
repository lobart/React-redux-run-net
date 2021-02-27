import './App.css';
import Header from './components/Header/Header'
import Content from './components/Content/Content'
import Dialogs from './components/Dialogs/Dialogs'
import NavContainer from './redux/Nav-container'
import {BrowserRouter, Route} from "react-router-dom"



const App = (props) => {
  return(
      <BrowserRouter>
      <div className='site-wrapper'>
          <Header/>
        <NavContainer store={props.store}/>
        {/*<Cont/>*/}
        <div className='site-wrapper-content'>
            <Route exact path='/dialogs' render={() => <Dialogs store = {props.store} />} />
            <Route exact path='/profile' render={() => <Content store = {props.store} />} />
        </div>
      </div>
      </BrowserRouter>
  );

}

export default App;


