import React from 'react';
import QuestionCard from '../../components/QuestionCard/index';
import SectionHeader from '../../components/SectionHeader';
import './registration.scss';

const Registration = ({text}) => {

	var lang = localStorage.getItem("lang")

	if (lang === "uz"){
		var title = text[26]?.uz_text
		var subtitle = text[27]?.uz_text
		var title2 = text[28]?.uz_text
		var subtitle2 = text[29]?.uz_text
		var title3 = text[32]?.uz_text
		var subtitle3 = text[33]?.uz_text
		var title4 = text[32]?.uz_text
		var subtitle4 = text[33]?.uz_text
	}
	if (lang === "ru"){
		title = text[26]?.ru_text
		subtitle = text[27]?.ru_text
		title2 = text[28]?.ru_text
		subtitle2 = text[29]?.ru_text
		title3 = text[30]?.ru_text
		subtitle3 = text[31]?.ru_text
		title4 = text[32]?.ru_text
		subtitle4 = text[33]?.ru_text
	}
	if (lang === "en"){
		title = text[26]?.en_text
		subtitle = text[27]?.en_text
		title2 = text[28]?.en_text
		subtitle2 = text[29]?.en_text
		title3 = text[30]?.en_text
		subtitle3 = text[31]?.en_text
		title4 = text[32]?.en_text
		subtitle4 = text[33]?.en_text
	}
	if (lang === "kz"){
		title = text[26]?.kyr_text
		subtitle = text[27]?.kyr_text
		title2 = text[28]?.kyr_text
		subtitle2 = text[29]?.kyr_text
		title3 = text[30]?.kyr_text
		subtitle3 = text[31]?.kyr_text
		title4 = text[32]?.kyr_text
		subtitle4 = text[33]?.kyr_text
		
	}

	

	return (
		<section className='registration-section mtb'>
			<SectionHeader
				title={title}
				subtitle={subtitle}>
				<div className='flex question-cards align-items-top mt'>
					<QuestionCard
						title={title2}
						subtitle={subtitle2}
						index={1}
					/>
					<svg
						style={{ marginTop: '65px' }}
						width='120'
						height='80'
						viewBox='0 0 36 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M35.0607 13.0607C35.6464 12.4749 35.6464 11.5251 35.0607 10.9393L25.5147 1.3934C24.9289 0.807611 23.9792 0.807611 23.3934 1.3934C22.8076 1.97919 22.8076 2.92893 23.3934 3.51472L31.8787 12L23.3934 20.4853C22.8076 21.0711 22.8076 22.0208 23.3934 22.6066C23.9792 23.1924 24.9289 23.1924 25.5147 22.6066L35.0607 13.0607ZM0 13.5H34V10.5H0V13.5Z'
							fill='#2D1D3F'
							fill-opacity='0.4'
						/>
					</svg>

					<QuestionCard
						title={title3}
						subtitle={subtitle3}
						index={2}
					/>
					<svg
						style={{ marginTop: '65px' }}
						width='120'
						height='80'
						viewBox='0 0 36 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M35.0607 13.0607C35.6464 12.4749 35.6464 11.5251 35.0607 10.9393L25.5147 1.3934C24.9289 0.807611 23.9792 0.807611 23.3934 1.3934C22.8076 1.97919 22.8076 2.92893 23.3934 3.51472L31.8787 12L23.3934 20.4853C22.8076 21.0711 22.8076 22.0208 23.3934 22.6066C23.9792 23.1924 24.9289 23.1924 25.5147 22.6066L35.0607 13.0607ZM0 13.5H34V10.5H0V13.5Z'
							fill='#2D1D3F'
							fill-opacity='0.4'
						/>
					</svg>

					<QuestionCard
						title={title4}
						subtitle={subtitle4}
						index={3}
					/>
				</div>
			</SectionHeader>
		</section>
	);
};

export default Registration;
