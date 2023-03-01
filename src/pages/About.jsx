import logo from '../assets/kalen-emsley.png'
import LayoutStyle from '../styles/_AppLayout.module.scss'
import Collapse from '../components/Collapse';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'

function APropos() {
    return (
        <div className='container'>
            <Header/>
            <main className={LayoutStyle.layout}>
                <Banner logo={logo}/>
                {collapseTexte.map((collapse, index) => (
                    <Collapse
                        key={index}
                        title={collapse.title}
                        text={collapse.text}
                    />
                    ))}
                </main>
                <Footer/>
            </div>
    )
}

const collapseTexte = [
    {
        title: "Fiabilité",
        text: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    },
    {
        title: "Respect",
        text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    },
    {
        title: "Service",
        text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    },
    {
        title: "Sécurité",
        text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
]

export default APropos;