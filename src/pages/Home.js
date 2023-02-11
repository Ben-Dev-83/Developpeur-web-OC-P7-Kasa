import logo from '../asset/fond-mer.png';
import '../styles/Home.css';
import AnnouncementList from '../components/AnnouncementList'

function Home() {
    return (
        <div className='background'>
        <img src={logo} alt="fond mer" className='logo'/>
        <AnnouncementList/>
        </div>
    )
}

export default Home