import {NavLink} from 'react-router-dom';
export const Navbar=()=>{
    const nav = [
        {path:'/',element:'home'},
        {path:'/login', element:'login'},
        {path:'/single' , element:'singlePage'},
        {path:'/todo', element:'todo'},
    ];

    return(
       <div style={{listStyle:'none', display:'flex', justifyContent:'center', gap:'20PX' ,textTransform:'capitalize' ,
        fontSize:'1.1rem',fontWeight:'normal',cursor:'pointer'}}>     
         {nav.map((item, i) => {
        return (
          <NavLink 
            key={i}
            to={item.path}
            style={({isActive} ) => ({
              textDecoration: 'none',
              backgroundColor: isActive ? 'Tomato': 'white'
            })}
          >
            {item.element}
          </NavLink>
        );
      })}
    </div>
  );
};