import { useParams, Navigate } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import Collapse from "../components/Collapse";
import Host from "../components/Host";
import accommodationList from '../kasa.json';
import style from '../styles/_Accomodation.module.scss';
import LayoutStyle from '../styles/_AppLayout.module.scss';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Tags from '../components/Tags';
import Rate from '../components/Rate';

function Accommodation() {
  let { id } = useParams();
  const accommodationFind = accommodationList.find((accommodation) => {
    return accommodation.id === id
    })
  return (
    accommodationFind ? 
    <div className='container'>
      <Header/>
      <main className={LayoutStyle.layout}>
        <Carrousel
          title= {accommodationFind.title}
          pictures= {accommodationFind.pictures}  
        />
        <div className={style.container}>
          <section>
            <h1 className={style.container__title}>{accommodationFind.title}</h1>
            <p className={style.container__location}>{accommodationFind.location}</p>
            <Tags
              tags= {accommodationFind.tags}
            />
          </section>
          <aside className={style.container__host}>
            <Host
              name= {accommodationFind.host.name}
              picture= {accommodationFind.host.picture}
            />
            <Rate
              rating= {accommodationFind.rating}
            />
          </aside>
        </div>
        <div className={style.collapse}>
          <Collapse
            title= "Description"
            text= {accommodationFind.description}
            styled= {true}
          />
          <Collapse
            title= "Équipements"
            text= {accommodationFind.equipments}
            styled= {true}
          />
        </div>
      </main>
      <Footer/>
    </div>:
    <Navigate to="*" replace={true}/>
  );
}

export default Accommodation;