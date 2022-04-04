import React from 'react';
import Layout from '../components/Layout';
import bgImage from '../assets/headerbg.png';
import Navbar from '../components/Navbar';
import './Main.scss';

const Main = () => {
	return (
		<section className='main-section'>
			<Navbar/>
			<Layout>
				<div>
					<h1>Мега приз двух комнатная квартира в Ташкенте!</h1>
					<p>
						3 000 000 сум каждый день! 20 000 000 сум каждую неделю!
						50 000 000 сум каждый месяц! Отправьте sms на 2020
						сейчас! Только для абонентов uztelecom!
					</p>
					<button>Участвовать</button>
				</div>
			</Layout>
			<img src={bgImage} alt='car' />
		</section>
	);
};

export default Main;
