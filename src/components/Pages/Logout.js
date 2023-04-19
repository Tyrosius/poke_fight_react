import { Navigate } from 'react-router-dom';

const Logout=({setToken,setUser,setStatus})=>{
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    setStatus(false);
    return <Navigate to='/' />};

    export default Logout;