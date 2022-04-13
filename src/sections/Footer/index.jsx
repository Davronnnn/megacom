import React from 'react';
import Layout from '../../components/Layout';
import './footer.scss';
import arrow from '.././../assets/arrow.png';
const Footer = ({ text }) => {
	var lang = localStorage.getItem('lang');

	return (
		<footer className='footer'>
			<Layout>
				<div className='flex footer-main'>
					<p>
						{lang === 'uz' ? text[36]?.uz_text : ''}
						{lang === 'ru' ? text[36]?.ru_text : ''}
						{lang === 'en' ? text[36]?.en_text : ''}
						{lang === 'kz' ? text[36]?.kg_text : ''}
					</p>
					<button>
						<img src={arrow} alt='arrow' />
						Скачать
					</button>
				</div>
				<div className='footer-bottom'>
					<p style={{ width: '62%' }}>
						{lang === 'uz' ? text[37]?.uz_text : ''}
						{lang === 'ru' ? text[37]?.ru_text : ''}
						{lang === 'en' ? text[37]?.en_text : ''}
						{lang === 'kz' ? text[37]?.kg_text : ''}
					</p>
				</div>
			</Layout>
		</footer>
	);
};

export default Footer;
