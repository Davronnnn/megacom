import React, { useEffect, useState } from 'react';

import WOW from 'wowjs';
import axios from 'axios';

import Gift from './sections/Gifts';
import Main from './sections/Main';
import WinnersList from './sections/Winners';
import Registration from './sections/Registration';
import Questions from './sections/Question';
import Footer from './sections/Footer';
import FormSection from './sections/Form';

import Navbar from './components/Navbar';
import Loader from './components/Loader';

import './Home.scss';

const HomePage = () => {
	const [load, setLoad] = useState(true);
	const [text, setText] = useState([]);

	const [lang, setLang] = useState('kz');

	useEffect(() => {
		setLoad(true);
		new WOW.WOW({
			live: false,
		}).init();
		axios
			.get('https://backend.megacom.win/translation/get-words')
			.then((res) => {
				setText(res.data);
				setLoad(false);
			});
	}, []);

	useEffect(() => {
		if (localStorage.getItem('lang')) {
			setLang(localStorage.getItem('lang'));
		}
		setLoad(false);
	}, [load]);

	if (load) return <Loader />;
	return (
		<div>
			<Navbar
				load={load}
				text={text}
				lang={lang}
				setLoad={setLoad}
				setLang={setLang}
			/>
			<Main load={load} setLoad={setLang} text={text} lang={lang} />
			<Gift text={text} lang={lang} />
			<WinnersList text={text} lang={lang} />
			<Registration text={text} lang={lang} />
			<Questions text={text} lang={lang} />
			<FormSection text={text} lang={lang} />
			<Footer text={text} lang={lang} />
		</div>
	);
};

export default HomePage;
