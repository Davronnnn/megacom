import React from 'react';
import Gift from './sections/Gifts';
import Main from './sections/Main';
import WinnersList from './sections/Winners';
import './Home.scss';
import Registration from './sections/Registration';
import Questions from './sections/Question';
import Footer from './sections/Footer';
const HomePage = () => {
	return (
		<div>
			<Main />
			<Gift />
			<WinnersList />
			<Registration />
			<Questions />
			<Footer />
		</div>
	);
};

export default HomePage;
