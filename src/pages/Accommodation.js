import { useParams } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import Collapse from "../components/Collapse";
import Host from "../components/Host";
import accommodationList from '../kasa.json'
import AccommodationStyle from '../styles/Accomodation.module.scss'
import LayoutStyle from '../styles/AppLayout.module.scss'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Tags from '../components/Tags'
import Rate from '../components/Rate'



function Accommodation(props) {
  console.log(props.styled)
        let { id } = useParams();
        const accommodationFind = accommodationList.find((accommodation) => {
            return accommodation.id === id
        })

        return (
          <div className='container'>
            <Banner/>
            <div className={LayoutStyle.layout}>

            <Carrousel
                title= {accommodationFind.title}
                pictures= {accommodationFind.pictures}
            />
            <div className={AccommodationStyle.container}>
              <div>
                <h1 className={AccommodationStyle.title}>{accommodationFind.title}</h1>
                <p className={AccommodationStyle.location}>{accommodationFind.title}</p>
                <Tags
                  tags= {accommodationFind.tags}
                  />
              </div>
              <div>
                <Host
                  name= {accommodationFind.host.name}
                  picture= {accommodationFind.host.picture}
                  />
                  <Rate
                    rating= {accommodationFind.rating}
                  />
              </div>
            </div>
            <div className={AccommodationStyle.collapse}>
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
            </div>
            <Footer/>
            </div>
        );

}

export default Accommodation;