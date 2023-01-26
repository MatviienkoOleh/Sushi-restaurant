import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../../App';
import About from '../about/About';
import Bucket from '../bucket/Bucket';
import Categories from '../categories/Categories';
import Error404 from '../error404/Error404';
import MakeOrderForm from '../makeOrderForm/MakeOrderForm';

const mainRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App />}/>
            <Route path='/categories' element={<Categories />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/bucket' element={<Bucket />}/>
            <Route path='/makeOrder' element={<MakeOrderForm />}/>
            <Route path='*' element={<Error404 />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default mainRoutes