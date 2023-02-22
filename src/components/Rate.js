import starEmpty from '../asset/star-empty.svg'
import starFull from '../asset/star-full.svg'


function Rate(props) {
    const rate = [1, 2, 3, 4, 5]
    return (
        <div>
            {rate.map((rating, index) => (
                <img src={rating <= props.rating ? starFull : starEmpty} key={index} alt='étoile vide'/>
            ))}
        </div>
    )
}

export default Rate