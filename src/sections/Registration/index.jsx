import React from 'react';
import './registration.scss';

const Registration = ({ text, lang }) => {
	let title,
		subtitle,
		title2,
		subtitle2,
		title3,
		subtitle3,
		title4,
		subtitle4 = '';

	if (lang === 'uz') {
		title = text[26]?.uz_text;
		subtitle = text[27]?.uz_text;
		title2 = text[28]?.uz_text;
		subtitle2 = text[29]?.uz_text;
		title3 = text[30]?.uz_text;
		subtitle3 = text[31]?.uz_text;
		title4 = text[32]?.uz_text;
		subtitle4 = text[33]?.uz_text;
	}
	if (lang === 'ru') {
		title = text[26]?.ru_text;
		subtitle = text[27]?.ru_text;
		title2 = text[28]?.ru_text;
		subtitle2 = text[29]?.ru_text;
		title3 = text[30]?.ru_text;
		subtitle3 = text[31]?.ru_text;
		title4 = text[32]?.ru_text;
		subtitle4 = text[33]?.ru_text;
	}
	if (lang === 'en') {
		title = text[26]?.en_text;
		subtitle = text[27]?.en_text;
		title2 = text[28]?.en_text;
		subtitle2 = text[29]?.en_text;
		title3 = text[30]?.en_text;
		subtitle3 = text[31]?.en_text;
		title4 = text[32]?.en_text;
		subtitle4 = text[33]?.en_text;
	}
	if (lang === 'kz') {
		title = text[26]?.kg_text;
		subtitle = text[27]?.kg_text;
		title2 = text[28]?.kg_text;
		subtitle2 = text[29]?.kg_text;
		title3 = text[30]?.kg_text;
		subtitle3 = text[31]?.kg_text;
		title4 = text[32]?.kg_text;
		subtitle4 = text[33]?.kg_text;
	}

	return (
		<section className='registration-section section mtb company'>
			<h3 className='section__title'>{title}</h3>
			<div className=' question-cards align-items-top mt'>
				{/* <QuestionCard title={title2} subtitle={subtitle2} index={1} /> */}
			</div>
		</section>
	);
};

export default Registration;
