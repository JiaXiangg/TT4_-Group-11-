import React from 'react';
import { Redirect } from 'react-router-dom';

const Home = ({isLoggedIn,onSubmitSignOut, userData, setUserData}) =>{

	return(

		<div>
			{
				isLoggedIn ? ( 
				<h2>Welcome to E-Wallet</h2>
				) : (
				<Redirect to ='/login'/>
				 ) 
			}
		</div>

		)
}

export default Home;