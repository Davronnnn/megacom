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
import FormSection from './sections/Form';
const HomePage = () => {
	const [load, setLoad] = useState(false);
	const [text, setText] = useState([]);
	
	const [lang,setLang] = useState(localStorage.getItem('lang'));

	useEffect(() => {
		new WOW.WOW({
			live: false,
		}).init();
		setLang(localStorage.getItem('lang'))
		axios
			.get('https://backend.megacom.win/translation/get-words')
			.then((res) => {
				setText(res.data);
				console.log(res.data);
				setLoad(false);
			})
			.catch((err) => {
				console.log(err);
				setLoad(false);
			});
	}, [load]);

	if (load)
		return (
			<div>
				<Main load={load} setLoad={setLoad} text={text} lang={lang} />
				<Gift text={text} lang={lang} />
				<WinnersList text={text} lang={lang} />
				<Registration text={text} lang={lang} />
				<Questions text={text} lang={lang} />
				<FormSection text={text} lang={lang} />
				<Footer text={text} lang={lang} />
			</div>
		);
	return (
		<div>
			<Main load={load} setLoad={setLoad} text={text} lang={lang} />
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
