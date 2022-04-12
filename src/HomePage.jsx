import React, { useEffect, useState } from 'react';
import Gift from './sections/Gifts';
import Main from './sections/Main';
import WinnersList from './sections/Winners';
import './Home.scss';
import Registration from './sections/Registration';
import Questions from './sections/Question';
import Footer from './sections/Footer';
import WOW from 'wowjs';
import axios from 'axios';

const HomePage = () => {
	const [load, setLoad] = useState(true);
	const [text, setText] = useState([]);

	useEffect(() => {
		new WOW.WOW({
			live: false,
		}).init();
	}, []);

	useEffect(() => {
		axios
			.get('http://backend.megacom.win/translation/get-words')
			.then((res) => {
				setText(res.data);
				setLoad(false);
			});
	}, [load]);

	if (load) return <div></div>;
	return (
		<div>
			<Main load={load} setLoad={setLoad} text={text} />
			<Gift text={text} />
			<WinnersList text={text} />
			<Registration text={text} />
			<Questions text={text} />
			<Footer text={text} />
		</div>
	);
};

export default HomePage;
