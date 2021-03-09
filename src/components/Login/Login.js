import React from 'react';
import {Field, reduxForm} from "redux-form";
import {CheckBox, TextArea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, requered} from "../../utils/Validator";
import {Redirect} from "react-router-dom";
import style from '../../components/common/FormsControls/FormControls.module.css'
const maxLength10 = maxLengthCreator(20);

const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit} action="" >
                <div>
                    <div><Field component={TextArea} name={'email'} placeholder={'login'} validate={[requered, maxLength10]}/></div>
                    <div><Field component={TextArea} name={'password'} placeholder={'password'} validate={[requered, maxLength10]}/></div>
                    <div><Field component={CheckBox} name={'rememberMe'} type={'checkbox'}/> Remember me</div>
                </div>
                { props.error && <div className={style.formSummaryError}>
                    {props.error}
                </div>}
                <div>
                    <button type={"submit"} align={'left'}>Login</button>
                    <button type={"button"} align={'right'}>Log out</button>
                </div>
            </form>
    )
}

const ReduxLoginForm = reduxForm ({
    form: 'loginForm'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
        console.log(formData)
    }
    if (props.isAuth){
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;