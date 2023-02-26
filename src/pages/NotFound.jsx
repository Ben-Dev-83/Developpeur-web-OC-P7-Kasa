import NotFoundStyle from '../styles/NotFound.module.scss'
import { Link } from 'react-router-dom'
import LayoutStyle from '../styles/AppLayout.module.scss'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

function NotFound() {
    return (
        <div className='container'>
            <Banner/>
            <div className={`${LayoutStyle.layout}  ${LayoutStyle.container}`}>
                <h1 className={NotFoundStyle.title}>404</h1>
                <p className={NotFoundStyle.paragraphe}>Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/" className={NotFoundStyle.link}>Retourner sur la page d’accueil</Link>
            </div>
            <Footer/>
        </div>
    )
}

export default NotFound