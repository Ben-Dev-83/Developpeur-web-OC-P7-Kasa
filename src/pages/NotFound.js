import NotFoundStyle from '../styles/NotFound.module.scss'

function NotFound() {
    return (
        <div>
            <h1 className={NotFoundStyle.title}>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
        </div>
    )
}

export default NotFound