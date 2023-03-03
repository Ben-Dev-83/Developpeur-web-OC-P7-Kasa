import style from'../styles/_Card.module.scss';
import {Link} from 'react-router-dom';
import accommodationList from '../kasa.json';

function Card() {
  return (
    <section className={style.container}>
      {accommodationList.map((announcement, index) => (
        <article key={index}>
          <Link to={`/logement/${announcement.id}`} className={style.list}>
            <h2 className={style.list__title}>{announcement.title}</h2>
            <img src={announcement.cover} alt={announcement.title} className={style.list__img}/>
          </Link>
        </article>
      ))}        
    </section>
  )
}

export default Card;