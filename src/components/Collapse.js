import CollapseStyle from '../styles/Collapse.module.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'




function Collapse(props) {
    const [collapse, collapseOpen] = useState(false)
    return (
        <div className={ `${CollapseStyle.container} ${collapse ? CollapseStyle.collapseOp : CollapseStyle.collapseClose}`}>
            <div className={CollapseStyle.titleContainer} onClick={() => collapseOpen(!collapse)} >
                <h2 className={CollapseStyle.title}>{props.title}</h2>
                <FontAwesomeIcon icon={collapse ? faChevronUp : faChevronDown} className={CollapseStyle.color} />
            </div>
            <div className={CollapseStyle.containerDesc}>
                <p className={CollapseStyle.containerDesc__description}>{props.text}</p>
            </div>
        </div>
    )
}

export default Collapse