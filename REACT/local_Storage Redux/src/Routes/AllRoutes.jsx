import { Routes, Route } from 'react-router-dom';
import { Login } from '../Components/Login';
import { Home } from '../Pages/Home';
import { PageNotFound404 } from '../Pages/PageNotFound404';
import { SinglePage } from '../Pages/SinglePage';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/SinglePage" element={<SinglePage/>}></Route>
      <Route path="*" element={<PageNotFound404 />}></Route>
    </Routes>
  )
};
