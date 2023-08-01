import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import Category from './containers/Category';
import Favorites from './containers/Favorites';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/category' element={<Category/>}/>
            <Route path='/favorite' element={<Favorites/>}/>
        </Routes>
    );
};
export default Router;
