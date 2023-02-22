import CarrouselStyle from '../styles/Carrousel.module.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

function Carrousel(props) {
    let  pictures = props.pictures
    let [index, setIndex] = useState(0);
    let length = pictures.length
    const display = CarrouselStyle.container__display
    console.log(pictures.length)

    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);
    };
    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
    };
    return (
        <div>
            <div className={CarrouselStyle.container}>
                <img src={pictures[index]} alt='test' className={CarrouselStyle.img}/>
                <div className={display}>
                    <div className={CarrouselStyle.container__icons}>
                    <FontAwesomeIcon icon={faChevronLeft} className={CarrouselStyle.icon} onClick={handlePrevious}/>
                    <FontAwesomeIcon icon={faChevronRight} className={CarrouselStyle.icon} onClick={handleNext}/>
                    </div>
                <p className={CarrouselStyle.container__stage}>{`${index +1}/${length}`}</p>
                </div>
            </div>
        </div>
    )
}

export default Carrousel