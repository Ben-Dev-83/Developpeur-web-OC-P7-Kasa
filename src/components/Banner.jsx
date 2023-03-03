import style from '../styles/_Banner.module.scss';

function Banner(props) {
  return (
    <div className={style.header}>
      <img src={props.logo} alt="fond mer" className={style.header__logo}/>
      <h1 className={style.header__title}>{props.title}</h1>
    </div>
  )
}

export default Banner;