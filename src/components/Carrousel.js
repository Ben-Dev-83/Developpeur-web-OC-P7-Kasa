import CarrouselStyle from '../styles/Carrousel.module.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

function Carrousel(props) {
    const pictures = props.pictures
    let [index, setIndex] = useState(0);
    let length = pictures.length

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
            <div className={CarrouselStyle.container__icons}>
                <FontAwesomeIcon icon={faChevronLeft} className={CarrouselStyle.icon} onClick={handlePrevious}/>
                <FontAwesomeIcon icon={faChevronRight} className={CarrouselStyle.icon} onClick={handleNext}/>
            </div>
        </div>
        </div>
    )
}

export default Carrousel