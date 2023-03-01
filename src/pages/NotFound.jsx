import style from '../styles/_NotFound.module.scss'
import { Link } from 'react-router-dom'
import LayoutStyle from '../styles/_AppLayout.module.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'

function NotFound() {
    return (
        <div className='container'>
            <Header/>
            <main className={`${LayoutStyle.layout}  ${LayoutStyle.container}`}>
                <h1 className={style.title}>404</h1>
                <p className={style.paragraphe}>Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/" className={style.link}>Retourner sur la page d’accueil</Link>
            </main>
            <Footer/>
        </div>
    )
}

export default NotFound