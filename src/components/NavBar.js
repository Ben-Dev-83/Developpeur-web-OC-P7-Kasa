import {Link} from 'react-router-dom'
import '../styles/NavBar.css'
function NavBar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/a-propos">A propos</Link>
        </nav>
    )
}

export default NavBar