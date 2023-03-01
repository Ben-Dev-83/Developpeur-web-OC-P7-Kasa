import style from'../styles/Card.module.scss';
import {Link} from 'react-router-dom';
import accommodationList from '../kasa.json';

function Card() {
    return (
        <section className={style.container}>
            {accommodationList.map((announcement, index) => (
                <article>
                    <Link to={`/logement/${announcement.id}`} key={index} className={style.list}>
                        <h2 className={style.title}>{announcement.title}</h2>
                        <img src={announcement.cover} alt={announcement.title} className={style.img}/>
                    </Link>
                </article>
            ))}        
        </section>
    )
}

export default Card;