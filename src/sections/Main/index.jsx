import React from 'react';
import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import './Main.scss';
import card1 from '../../assets/kiario.png';
import card2 from '../../assets/homeCard.png';
const Main = () => {
	return (
		<section className='main-section'>
			<Layout>
				<Navbar />
				<img id='card1' src={card1} alt='kiario' />
				<img id='card2' src={card2} alt='card2' />
				<div className='main-section__title'>
					<h1>
						<span
							className='wow bounceInUp'
							data-wow-duration='0.5s'
							data-wow-delay='0.2s'>
							{' '}
							Мега приз двух
						</span>
						<span
							className='wow fadeInUp'
							data-wow-duration='0.5s'
							data-wow-delay='0.3s'>
							{' '}
							комнатная квартира в Ташкенте!
						</span>
					</h1>
					<p
						className='wow fadeInUp'
						data-wow-duration='0.6s'
						data-wow-delay='0.3s'>
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
