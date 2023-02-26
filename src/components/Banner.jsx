import style from '../styles/Banner.module.scss'
import NavBar from "./NavBar"
import logo from '../assets/logo.png'

function Banner() {
    return (
        <header className={style.container}>
            <img className={style.container__img} src={logo} alt="logo"/>,
            <NavBar/>
        </header>
    )
}

export default Banner