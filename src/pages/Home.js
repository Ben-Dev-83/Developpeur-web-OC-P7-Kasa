import logo from '../asset/fond-mer.png';
import '../styles/Home.css';
import LayoutStyle from '../styles/AppLayout.module.scss'

import Card from '../components/Card'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

function Home() {
    return (
        <div className='container'>
            <Banner/>
            <div className={LayoutStyle.layout}>
                <div className='header'>
                    <img src={logo} alt="fond mer" className='logo'/>
                    <h1 className='title'>Chez vous, partout et ailleurs</h1>
                </div>
                <Card/>
            </div>
        <Footer/>
        </div>
    )
}

export default Home