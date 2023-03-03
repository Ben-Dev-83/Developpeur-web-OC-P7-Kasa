import style from '../styles/_Collapse.module.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

function Collapse(props) {
  const [collapse, collapseOpen] = useState(false);
  const height= props.styled ? style['height'] : '';

  return (
    <div className={`${height} ${style.container} ${collapse ? style.collapseOp : style.collapseClose}`}>
      <div className={style.titleContainer} onClick={() => collapseOpen(!collapse)} >
        <h2 className={style.titleContainer__title}>{props.title}</h2>
        <FontAwesomeIcon icon={collapse ? faChevronUp : faChevronDown} className={style.iconColor} />
      </div>
      <div className={ Array.isArray(props.text) ? `${style.containerDesc__description}` : `${style.containerDesc__aboutDesc}`}>
        {Array.isArray(props.text) ? props.text.map((desc, index) => (
          <p key={index} className={style.containerDesc__paragraphe}>{desc}</p>
          )) : <p className={style.containerDesc__paragraphe}>{props.text}</p>
        }
      </div>
    </div>
  )
}

export default Collapse;