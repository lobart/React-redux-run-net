import './App.css';
import NavContainer from './components/Nav/Nav-container'
import {BrowserRouter, Route, withRouter} from "react-router-dom"
import DialogsContainer from "./components/Dialogs/Dialogs-Conteiner";
import MessagesContainer from "./components/Dialogs/Messages/Messages-container";
import UserContainer from "./components/Users/Users-Container";
import ProfileContainer from "./components/Profile/Profile-container";
import HeaderContainer from "./components/Header/Header-Container";
import LoginContainer from "./components/Login/LoginContainer";
import {Component} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import {initializeApp} from "./redux/app-reducer";


class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (this.props.initialized){
            return (
            <BrowserRouter>
                <div className='site-wrapper'>
                    <HeaderContainer/>
                    <NavContainer store={this.props.store}/>
                    <div className='site-wrapper-content'>
                        <Route exact path='/dialogs'> <DialogsContainer store={this.props.store}/></Route>
                        <Route exact path='/profile/:userID?'><ProfileContainer store={this.props.store}/></Route>
                        <Route exact path='/users'
                               render={() => <UserContainer key='UserContainer' store={this.props.store}/>}/>
                        <Route exact path='/login'
                               render={() => <LoginContainer key='LoginContainer' store={this.props.store}/>}/>
                    </div>
                </div>
            </BrowserRouter>
        );}
        else {
            return <Preloader/>
        }

    }
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    connect(mapStateToProps, {initializeApp}))(App);


