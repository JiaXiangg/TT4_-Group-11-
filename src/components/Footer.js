import React from 'react';

const Footer = () => {
	// document.body.style.minHeight = '100vh';
	document.getElementById('root').style.minHeight = '100vh';
	return (
		<>
			<footer
				class='footer mt-auto py-3 bg-light'
				style={{ position: 'sticky', top: '100%' }}
			>
				<div class='container'>
					<span class='text-muted'>This is a footer.</span>
				</div>
			</footer>
		</>
	);
};

export default Footer;
