import React from 'react';
import Layout from './Layout';
import logo from '../assets/logo.png';

import './Navbar.scss';

const Navbar = () => {
	return (
			<nav>
				<img src={logo} alt='Megacom' />
				<div className='nav-links'>
					<p>Призы</p>
					<p>Победители</p>
					<p>Как принять участие</p>
					<p>ЧАВО</p>
					<p>Условия и положения</p>
				</div>
			</nav>
	);
};

export default Navbar;
