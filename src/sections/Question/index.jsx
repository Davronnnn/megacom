import React, { useEffect, useState } from 'react';
import Accordion from '../../components/Accordion';
import SectionHeader from '../../components/SectionHeader';
import './question.scss';
import questionArrow from '../../assets/questionarrow.png';
import axios from 'axios';
const Questions = ({ text, lang }) => {
	const [faq, setFaq] = useState([]);
	const [data, setData] = useState([]);
	let sec_title;

	if (lang === 'uz') {
		sec_title = text[34]?.uz_text;
	}
	if (lang === 'ru') {
		sec_title = text[34]?.ru_text;
	}
	if (lang === 'en') {
		sec_title = text[34]?.en_text;
	}
	if (lang === 'kz') {
		sec_title = text[34]?.kg_text;
	}
	useEffect(() => {
		axios
			.get('https://backend.megacom.win/translation/get-faqs')
			.then((res) => {
				setFaq(res.data.slice(0, 5));
				setData(res.data);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const fullData = () => {
		setFaq(data);
	};
	return (
		<section className='question-section question'>
			<SectionHeader title={sec_title}>
				{lang === 'uz'
					? faq.map((f, i) => {
							return (
								<Accordion key={i} title={f.question_uz}>
									{f.answer_uz}
								</Accordion>
							);
					  })
					: lang === 'ru'
					? faq.map((f, i) => {
							return (
								<Accordion key={i} title={f.question_ru}>
									{f.answer_ru}
								</Accordion>
							);
					  })
					: lang === 'en'
					? faq.map((f, i) => {
							return (
								<Accordion key={i} title={f.question_en}>
									{f.answer_en}
								</Accordion>
							);
					  })
					: faq.map((f, i) => {
							return (
								<Accordion key={i} title={f.question_kg}>
									{f.answer_kg}
								</Accordion>
							);
					  })}

				<div
					onClick={fullData}
					className='question-section__link mb mt-5'>
					<div href='/'>
						{lang === 'uz' ? text[44]?.uz_text : ''}
						{lang === 'ru' ? text[44]?.ru_text : ''}
						{lang === 'en' ? text[44]?.en_text : ''}
						{lang === 'kz' ? text[44]?.kg_text : ''}
						<img src={questionArrow} alt='arrow' />
					</div>
				</div>
			</SectionHeader>
		</section>
	);
};

export default Questions;
