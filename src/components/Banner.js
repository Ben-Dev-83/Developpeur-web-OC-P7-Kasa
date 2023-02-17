import BannerStyle from '../styles/Banner.module.scss'
import NavBar from "./NavBar"
import logo from '../asset/logo.png'

function Banner() {
    return (
        <header className={BannerStyle.container}>
            <img src={logo} alt="logo"/>,
            <NavBar/>
        </header>
    )
}

export default Banner