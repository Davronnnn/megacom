import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import './footer.scss';
// import arrow from '.././../assets/arrow.png';
import axios from 'axios';
const Footer = ({ text, lang }) => {
	const [file, setFile] = useState('');
	useEffect(() => {
		axios
			.get('https://backend.megacom.win/translation/get-policy-file')
			.then((res) => {
				setFile(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<footer className='footer'>
			<Layout>
				<div className='flex footer-main'>
					<p>
						{lang === 'uz' ? text[36]?.uz_text : ''}
						{lang === 'Рус' ? text[36]?.ru_text : ''}
						{lang === 'en' ? text[36]?.en_text : ''}
						{lang === 'kz' ? text[36]?.kg_text : ''}
					</p>
					<a href={file.file}>
						{/* <img src={arrow} alt='arrow' /> */}
						{lang === 'Рус' ? 'Скачать' : ''}
						{lang === 'uz' ? 'Yuklab olish' : ''}
						{lang === 'en' ? 'Download' : ''}
						{lang === 'kz' ? 'Жүктөп алуу' : ''}
					</a>
				</div>
				<div className='footer-bottom'>
					<p style={{ width: '62%' }}>
						{lang === 'uz' ? text[37]?.uz_text : ''}
						{lang === 'Рус' ? text[37]?.ru_text : ''}
						{lang === 'en' ? text[37]?.en_text : ''}
						{lang === 'kz' ? text[37]?.kg_text : ''}
					</p>
				</div>
			</Layout>
		</footer>
	);
};

export default Footer;
