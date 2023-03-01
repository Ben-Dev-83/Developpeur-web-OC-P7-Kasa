import style from '../styles/Banner.module.scss'

function Banner(props) {
    return (
        <div className={style.header}>
            <img src={props.logo} alt="fond mer" className={style.logo}/>
            <h1 className={style.title}>{props.title}</h1>
        </div>
    )
}

export default Banner