import React from 'react';
import { Link } from 'react-router-dom';
import dbsLogo from '../assets/img/dbs-logo.png';

function Nav({ isLoggedIn }) {
	let menu;

	if (isLoggedIn) {
		menu = (
			<div>
				<ul className='navbar-nav me-auto mb-2 mb-md-0'>
					<li className='nav-item'>
						<Link to='/logout' className='nav-link active'>
							Logout
						</Link>
					</li>
				</ul>
			</div>
		);
	} else {
		menu = (
			<div>
				<ul className='navbar-nav me-auto mb-2 mb-md-0'>
					<li className='nav-item'>
						<Link to='/login' className='nav-link active'>
							Login
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/register' className='nav-link active'>
							Register
						</Link>
					</li>
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
