import style from '../styles/_Footer.module.scss';
import logo from '../assets/logo-footer.png';

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footer__description}>
        <img src={logo} alt="logo footer" className={style.footer__img}/> 
        <p className={style.footer__copyright}>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer;