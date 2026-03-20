import { Routes, Route } from 'react-router-dom';
import { Login } from '../Components/Login';
import { Home } from '../Pages/Home';
import { PageNoyFound404 } from '../Pages/PageNoyFound404';
import { Todo } from '../Pages/Todo';
import { SinglePage } from '../Pages/SinglePage';
import { Private } from '../Pages/Private';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route
        path="/single/:id"
        element={
          <Private>
            <SinglePage />
          </Private>
        }
      ></Route>
      <Route
        path="/todo"
        element={
          <Private>
            <Todo />
          </Private>
        }
      ></Route>
      <Route path="*" element={<PageNoyFound404 />}></Route>
    </Routes>
  );
};
