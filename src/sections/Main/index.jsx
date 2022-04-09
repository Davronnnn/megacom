import React from 'react';
import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar';
import './Main.scss';
import card1 from '../../assets/header-card1.png';
import star from '../../assets/star.png';
const Main = () => {
	return (
		<section className='main-section'>
			<Layout>
				<Navbar />
				<button className='header-card1'>
					<img src={card1} alt='icon' />
					<div>
						<p>12 автомобилей </p>
						<h4>KIA RIO</h4>
					</div>
				</button>
				<button className='header-card2'>
					<div>
						<h3>20 000 000 сум приз!</h3>
					</div>
					<div className='main'>
						<img src={star} alt='icon' />
						<p>4.9 </p>
						<span>(15k участников)</span>
					</div>
				</button>
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
