import React from 'react';
import { Link } from 'react-scroll';

import Layout from '../../components/Layout';

import card1 from '../../assets/header-card1.png';
import star from '../../assets/star.png';

import './Main.scss';
const Main = ({ load, lang, setLang, setLoad, text }) => {
	return (
		<section className='main-section'>
			<Layout>
				<div className='main-section__title'>
					<h1>
						<span
							className='wow bounceInUp'
							data-wow-duration='0.5s'
							data-wow-delay='0.2s'>
							{lang === 'uz' ? text[5]?.uz_text : ''}
							{lang === 'ru' ? text[5]?.ru_text : ''}
							{lang === 'en' ? text[5]?.en_text : ''}
							{lang === 'kz' ? text[5]?.kg_text : ''}
						</span>
					</h1>
					<p
						className='wow fadeInUp'
						data-wow-duration='0.6s'
						data-wow-delay='0.3s'>
						{lang === 'uz' ? text[6]?.uz_text : ''}
						{lang === 'ru' ? text[6]?.ru_text : ''}
						{lang === 'en' ? text[6]?.en_text : ''}
						{lang === 'kz' ? text[6]?.kg_text : ''}
					</p>
					<div className='main-section__buttons '>
						<Link
							to='form'
							spy={true}
							smooth={true}
							offset={50}
							duration={2000}>
							{lang === 'uz' ? text[7]?.uz_text : ''}
							{lang === 'ru' ? text[7]?.ru_text : ''}
							{lang === 'en' ? text[7]?.en_text : ''}
							{lang === 'kz' ? text[7]?.kg_text : ''}
						</Link>
						<span>
							<p>
								{lang === 'uz' ? text[8]?.uz_text : ''}
								{lang === 'ru' ? text[8]?.ru_text : ''}
								{lang === 'en' ? text[8]?.en_text : ''}
								{lang === 'kz' ? text[8]?.kg_text : ''}
							</p>
							<p>
								{lang === 'uz' ? text[43]?.uz_text : ''}
								{lang === 'ru' ? text[43]?.ru_text : ''}
								{lang === 'en' ? text[43]?.en_text : ''}
								{lang === 'kz' ? text[43]?.kg_text : ''}
							</p>
						</span>
					</div>
				</div>
				<button className='header-card1'>
					<img src={card1} alt='icon' />
					<div>
						<p>
							{lang === 'uz' ? text[38]?.uz_text : ''}
							{lang === 'ru' ? text[38]?.ru_text : ''}
							{lang === 'en' ? text[38]?.en_text : ''}
							{lang === 'kz' ? text[38]?.kg_text : ''}
						</p>
						<h4>KIA RIO</h4>
					</div>
				</button>
				<button className='header-card2'>
					<div>
						<h3>
							{lang === 'uz' ? text[39]?.uz_text : ''}
							{lang === 'ru' ? text[39]?.ru_text : ''}
							{lang === 'en' ? text[39]?.en_text : ''}
							{lang === 'kz' ? text[39]?.kg_text : ''}
						</h3>
					</div>
					<div className='main'>
						<img src={star} alt='icon' />
						<p>
							{lang === 'uz' ? text[42]?.uz_text : ''}
							{lang === 'ru' ? text[42]?.ru_text : ''}
							{lang === 'en' ? text[42]?.en_text : ''}
							{lang === 'kz' ? text[42]?.kg_text : ''}
						</p>
						<span>
							({lang === 'uz' ? text[40]?.uz_text : ''}
							{lang === 'ru' ? text[40]?.ru_text : ''}
							{lang === 'en' ? text[40]?.en_text : ''}
							{lang === 'kz' ? text[40]?.kg_text : ''})
						</span>
					</div>
				</button>
			</Layout>
		</section>
	);
};

export default Main;
