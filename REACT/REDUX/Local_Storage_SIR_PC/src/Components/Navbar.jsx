import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { REMOVE_TOKEN } from '../Redux/Auth/Action';
import '../App.css';

export const Navbar = () => {
  const dispatch = useDispatch();
  const nav = [
    { path: '/', element: 'home' },
    { path: '/login', element: 'login' },
    { path: '/single', element: 'singlePage' },
    { path: '/todo', element: 'todo' },
  ];
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        textDecoration: 'none',
        padding: '0  1rem 1.5rem',
      }}
    >
      {nav &&
        nav.map((item, i) => {
          return (
            <NavLink
              style={({ isActive }) => {
                return isActive
                  ? {
                      backgroundColor: 'tomato',
                    }
                  : { backgroundColor: 'transparent' };
              }}
              className="navLink"
              key={i}
              to={item.path}
              end
            >
              {item.element}
            </NavLink>
          );
        })}
      <button onClick={() => dispatch({ type: REMOVE_TOKEN })}>logout</button>
    </div>
  );
};
