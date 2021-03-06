import './App.css';
import React, { useState } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useLocation,
} from 'react-router-dom';
import { Link } from 'react-router-dom';
import makeAddTransactionRequest from './components/AddTransaction';
import AuthService from './components/AuthService';
import PrivateRoute from './components/PrivateRouter';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Profile from './pages/Profile';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import AddTransaction from './components/AddTransaction';
import TransactionHist from './pages/TransactionHist';
// import ViewAccountDetails from './components/AddTransaction'

function App() {
	const [userData, setUserData] = useState('');
	const [accountKey, setaccountKey] = useState('');
	const [isLoggedIn, setisLoggedIn] = useState(false);

	const onSubmitSignOut = (e) => {
		AuthService.signout();
		e.preventDefault();
		setisLoggedIn(false);
	};
	return (
		<div style={{ minHeight: '100vh' }}>
			<Router>
				<Navbar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />
				<div>
					<Route exact path='/home'>
						<Home
							isLoggedIn={isLoggedIn}
							onSubmitSignOut={onSubmitSignOut}
							userData={userData}
							setUserData={setUserData}
						/>
					</Route>
					<Route exact path='/aboutus' component={AboutUs} />

					<Route exact path='/'>
						<Login
							isLoggedIn={isLoggedIn}
							setisLoggedIn={setisLoggedIn}
							userData={userData}
							setUserData={setUserData}
						/>
					</Route>

					{/* <PrivateRoute exact path = '/viewaccountdetails'>
              <ViewAccountDetails accountkey ={ accountKey }/>
            </PrivateRoute>
            */}

					<PrivateRoute exact path='/viewtransactiondetails'>
						<TransactionHist userData={userData} />
					</PrivateRoute>

					<PrivateRoute exact path='/addtransaction'>
						<AddTransaction isLoggedIn={isLoggedIn} userData={userData} />
					</PrivateRoute>
				</div>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
