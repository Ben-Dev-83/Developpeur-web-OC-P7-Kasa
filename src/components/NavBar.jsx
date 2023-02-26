import {NavLink} from 'react-router-dom'
import style from '../styles/NavBar.module.scss'
function NavBar() {
    const linkActive = ({isActive}) =>(isActive ? style.active:style.disabled)
    return (
        <nav>
            <div className={style.link}>
                <NavLink to="/" className={linkActive}>Accueil</NavLink>
            </div>
            <div className={style.link}>
                <NavLink to="/a-propos" className={linkActive}>A propos</NavLink>
            </div>
        </nav>
    )
}

export default NavBar