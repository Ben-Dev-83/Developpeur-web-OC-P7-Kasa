import cardStyle from'../styles/Card.module.scss'
import announcementList from '../kasa.json'

function Card() {
    return (
        <div className={cardStyle.container}>
            {announcementList.map((announcement, index) => (
                <a href='' key={index} className={cardStyle.list}>
                    <h2 className={cardStyle.title}>{announcement.title}</h2>
                    <img src={announcement.cover} alt={announcement.title} className={cardStyle.img}/>
                </a>
            ))}        
        </div>
    )
}

export default Card;