import logo from '../assets/fond-mer.png';
import style from '../styles/_Home.module.scss';
import LayoutStyle from '../styles/_AppLayout.module.scss';
import Card from '../components/Card';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';

function Home() {
  return (
    <div className={style.container}>
      <Header/>
      <main className={LayoutStyle.layout}>
        <Banner logo={logo} title="Chez vous, partout et ailleurs"/>
        <Card/>
      </main>
      <Footer/>
    </div> 
  )
}

export default Home;