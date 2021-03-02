import s from './Header.module.css'

const Header = (props) => {
    return(
        <div className={s.header}>
            <div align="right">
                <img className={s.ava} src = {props.photo ? props.photo : 'https://homemania.ru/img/noavatar.png'}/>
            </div>
            <div className={s.d1}><h3><span>RUSSbook</span></h3></div>
            <div align="left" className={s.log}><h4><span>{props.login}</span></h4></div>
        </div>
    )
}

export default Header;