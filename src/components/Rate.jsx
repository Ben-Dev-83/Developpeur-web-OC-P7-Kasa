import style from '../styles/_Rate.module.scss'
import starEmpty from '../assets/star-empty.svg'
import starFull from '../assets/star-full.svg'


function Rate(props) {
    const rate = [1, 2, 3, 4, 5]
    return (
        <div className={style.container}>
            {rate.map((rating, index) => (
                <img className={style.container__img} src={rating <= props.rating ? starFull : starEmpty} key={index} alt='étoile'/>
            ))}
        </div>
    )
}

export default Rate