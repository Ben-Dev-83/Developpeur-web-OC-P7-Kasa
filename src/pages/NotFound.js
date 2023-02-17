import NotFoundStyle from '../styles/NotFound.module.scss'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className={NotFoundStyle.container}>
            <h1 className={NotFoundStyle.title}>404</h1>
            <p className={NotFoundStyle.paragraphe}>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className={NotFoundStyle.link}>Retourner sur la page d’accueil</Link>
        </div>
    )
}

export default NotFound