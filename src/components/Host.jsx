import style from '../styles/_Host.module.scss';

function Host(props) {
  return (
    <div className={style.container}>
      <h3 className={style.container__name}>{props.name}</h3>
      <img src={props.picture} alt={props.name} className={style.container__img}/>
    </div>
  )
}

export default Host;