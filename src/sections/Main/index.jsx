import React from 'react';
import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import './Main.scss';

const Main = () => {
	return (
		<section className='main-section'>
			<Layout>
				<Navbar />
				<div className='main-section__title'>
					<h1>Мега приз двух комнатная квартира в Ташкенте!</h1>
					<p>
						3 000 000 сум каждый день! 20 000 000 сум каждую неделю!
						50 000 000 сум каждый месяц! Отправьте sms на 2020
						сейчас! Только для абонентов uztelecom!
					</p>
					<div className='main-section__buttons'>
						<button>Участвовать</button>
						<span>
							<p> Подробнее: </p>
							<p>(78) 150-24-35</p>
						</span>
					</div>
				</div>
			</Layout>
		</section>
	);
};

export default Main;
