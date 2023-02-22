import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About'
import NotFound from './pages/NotFound'
import Accommodation from './pages/Accommodation'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path='/' element={<Home/>}></Route>
                <Route path='/a-propos' element={<About/>}></Route>
                <Route path='/logement/:id' element={<Accommodation/>}></Route>
            </Routes>   
        </BrowserRouter>

    )
}

export default Router