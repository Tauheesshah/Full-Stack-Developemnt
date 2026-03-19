import { Link } from 'react-router-dom';

export const Navbar = () => {
  const nav = [
    { path: '/', element: 'home' },
    { path: '/login', element: 'login' },
    { path: '/SinglePage', element: 'SinglePage' },
  ];
  return (
    <>
      {nav &&
        nav.map((item, i) => {
          return <Link key={i} to={item.path} >{item.element}</Link>;
        })}
    </>
  );
};
