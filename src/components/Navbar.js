import React from 'react';
import { Link } from 'react-router-dom';
import dbsLogo from '../assets/img/dbs-logo.png';

function Nav({ isLoggedIn, setisLoggedIn }) {
	document.getElementById('root').style.minHeight = '100vh';
	let menu;

	const handleLogout = () => {
		localStorage.clear();
		setisLoggedIn(false);
	}

	if (isLoggedIn) {
		menu = (
			<div>
				<ul className='navbar-nav me-auto mb-2 mb-md-0'>
					<li>
						<Link to='/home' className='nav-link active'>
							Home
						</Link>
					</li>
					<li>
						<Link to='/addtransaction' className='nav-link active'>
							Add Transaction
						</Link>
					</li>
					<li>
						<Link to='/viewtransactiondetails' className='nav-link active'>
							View Transactions
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/viewaccountdetails' className='nav-link active'>
							View Balance
						</Link>
					</li>
					<button
						className='btn btn-primary btn-block'
						onClick={handleLogout}
					>
						Log Out
					</button>
				</ul>
			</div>
		);
	} else {
		menu = (
			<div>
				<ul className='navbar-nav me-auto mb-2 mb-md-0'>
				</ul>
			</div>
		);
	}
	return (
		<nav className='navbar navbar-expand-md navbar-light bg-light mb-4'>
			<div className='container-fluid'>
				<Link to='/' className='navbar-brand'>
					<img src={dbsLogo} alt='dbs-logo' style={{ height: '2rem' }} />
				</Link>
				{menu}
			</div>
		</nav>
	);
}

export default Nav;
