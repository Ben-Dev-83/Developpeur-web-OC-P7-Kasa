import {Link} from 'react-router-dom'
import NavBarStyle from '../styles/NavBar.module.scss'
function NavBar() {
    return (
        <nav>
            <Link to="/" className={NavBarStyle.link}>Home</Link>
            <Link to="/a-propos" className={NavBarStyle.link}>A propos</Link>
        </nav>
    )
}

export default NavBar