import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import SpinnerAdd from '../Components/SpinnerAdd';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    // const location = useLocation();

    if(loading){
        return <SpinnerAdd></SpinnerAdd>
    }
    if (user && user.uid){
        return children;
    };
    return <Navigate to='/login'></Navigate>
    // state={{from: location}} replace
};

export default PrivateRoute;