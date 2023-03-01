import style from '../styles/Host.module.scss'

function Host(props) {
    return (
        <div className={style.container}>
            <h3 className={style.name}>{props.name}</h3>
            <img src={props.picture} alt={props.name} className={style.img}/>
        </div>
    )
}

export default Host