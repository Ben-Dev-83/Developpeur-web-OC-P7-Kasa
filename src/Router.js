import {Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About'
import NotFound from './pages/NotFound'

function Router() {
    return (
        <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path='/' element={<Home/>}></Route>
            <Route path='/a-propos' element={<About/>}></Route>
        </Routes>    
    )
}

export default Router