import cardStyle from'../styles/Card.module.scss'
import {Link} from 'react-router-dom'
import accommodationList from '../kasa.json'
import { useNavigate } from "react-router-dom";

function Card() {
    const navigate = useNavigate();

    return (
        <div className={cardStyle.container}>
            {accommodationList.map((announcement, index) => (
                <Link to={`/logement/${announcement.id}`} key={index} className={cardStyle.list}>
                    <h2 className={cardStyle.title}>{announcement.title}</h2>
                    <img src={announcement.cover} alt={announcement.title} className={cardStyle.img}/>
                </Link>
            ))}        
        </div>
    )
}

export default Card;