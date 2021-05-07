import React from 'react';
import { Redirect, Route} from 'react-router-dom';
import AuthService from './AuthService';

function PrivateRoute({ children, ...rest}){
	return(
		<Route {...rest} render ={() => {
			return AuthService.isAuthenticated === true
				? children
				: <Redirect to='/'/>
				}} />
				)
}  

export default PrivateRoute;
