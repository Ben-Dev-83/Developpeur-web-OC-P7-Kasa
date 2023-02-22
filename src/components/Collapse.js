import CollapseStyle from '../styles/Collapse.module.scss'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'




function Collapse(props) {
    const [collapse, collapseOpen] = useState(false)

    const height= props.styled ? CollapseStyle['height'] : ''
    return (
        <div className={ ` ${height} ${CollapseStyle.container} ${collapse ? CollapseStyle.collapseOp : CollapseStyle.collapseClose}`}>
            <div className={CollapseStyle.titleContainer} onClick={() => collapseOpen(!collapse)} >
                <h2 className={CollapseStyle.title}>{props.title}</h2>
                <FontAwesomeIcon icon={collapse ? faChevronUp : faChevronDown} className={CollapseStyle.color} />
            </div>
            <div className={Array.isArray(props.text) ? `${CollapseStyle.containerDesc} ${CollapseStyle.containerDesc__description}` : `${CollapseStyle.containerDesc__aboutDesc} ${CollapseStyle.containerDesc}`}>
                {Array.isArray(props.text) ? props.text.map((desc, index) => (
                    <p key={index}>{desc}</p>
                    )) : <p>{props.text}</p>
                }
            </div>
        </div>
    )
}

export default Collapse