import style from '../styles/Carrousel.module.scss'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

function Carrousel(props) {
    let  pictures = props.pictures
    let [index, setIndex] = useState(0);
    let [loaded, setLoaded] = useState(false);
    let length = pictures.length
    const display = pictures.length === 1 ? style.hide : style.container__display

    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);
    };
    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
    };
    useEffect(() => {
        if (loaded) {
          const timeoutId = setTimeout(() => {
            setLoaded(false);
          }, 500);
          return () => clearTimeout(timeoutId);
        }
      }, [loaded]);
    
    return (
        <div>
            <div className={style.container}>
                <img src={pictures[index]} alt={index} className={`${style.img} ${loaded ? style.flash :"" }`} onLoad={() => setLoaded(true)}/>
                <div className={display}>
                    <div className={style.container__icons}>
                    <FontAwesomeIcon icon={faChevronLeft} className={style.icon} onClick={handlePrevious}/>
                    <FontAwesomeIcon icon={faChevronRight} className={style.icon} onClick={handleNext}/>
                    </div>
                <p className={style.container__stage}>{`${index +1}/${length}`}</p>
                </div>
            </div>
        </div>
    )
}

export default Carrousel