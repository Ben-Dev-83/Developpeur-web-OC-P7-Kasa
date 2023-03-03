import style from '../styles/_Carrousel.module.scss';
import { useState, useEffect } from 'react';
import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow-right.svg';

function Carrousel(props) {
  let pictures = props.pictures;
  let [index, setIndex] = useState(0);
  let [loaded, setLoaded] = useState(false);
  let length = pictures.length;
  const display = pictures.length === 1 ? style.hide : style.container__display;

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
        <img src={pictures[index]} alt={index} className={`${style.container__img} ${loaded ? style.flash :"" }`} onLoad={() => setLoaded(true)}/>
        <div className={display}>
          <div className={style.container__icons}>
            <img src={arrowLeft} alt="flèche de gauche" className={style.icon} onClick={handlePrevious}/>
            <img src={arrowRight} alt="flèche de droite" className={style.icon} onClick={handleNext}/>
          </div>
          <p className={style.container__stage}>{`${index +1}/${length}`}</p>
        </div>
      </div>
    </div>
  )
}

export default Carrousel;