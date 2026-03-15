import { Routes, Route } from 'react-router-dom';
import { Login } from '../Components/Login';
import { Home } from '../Pages/Home';
import { PageNoyFound404 } from '../Pages/PageNotFound404';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/single" element></Route>
      <Route path="*" element={<PageNoyFound404 />}></Route>
    </Routes>
  );
};
