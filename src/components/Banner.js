import NavBar from "./NavBar"
import logo from '../asset/logo.png'
import '../styles/Header.css'

function Banner() {
    return (
        <header className="header-container">
            <img src={logo} alt="logo"/>,
            <NavBar/>
        </header>
    )
}

export default Banner