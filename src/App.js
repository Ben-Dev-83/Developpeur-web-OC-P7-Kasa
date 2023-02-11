import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import APropos from './pages/A-propos'
import Banner from './components/Banner'

function App() {
  return (
    <div className="App">
      <Banner/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/a-propos' element={<APropos/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
