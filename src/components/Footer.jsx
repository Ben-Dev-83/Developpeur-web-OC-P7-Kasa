import footerStyle from '../styles/Footer.module.scss'
import logo from '../assets/logo-footer.png'


function Footer() {
    return (
        <footer className={footerStyle.footer}>
            <div className={footerStyle.description}>
                <img src={logo} alt="logo footer"/> 
                <p className={footerStyle.copyright}>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer