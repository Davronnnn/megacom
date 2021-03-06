import React from 'react';
import Card from '../../components/Card/index.jsx';
import SectionHeader from '../../components/SectionHeader';
import messageImg from '../../assets/message-coins.png';
import './gifts.scss';

const Gift = ({ text,lang }) => {

	let title,
		card_title1,
		card_title2,
		card_title3,
		price1,
		price2,
		price3,
		text1,
		text2,
		text3,
		participate = '';

	if (lang === 'uz') {
		title = text[9]?.uz_text;
		card_title1 = text[10]?.uz_text;
		card_title2 = text[11]?.uz_text;
		card_title3 = text[12]?.uz_text;
		price1 = text[13]?.uz_text;
		price2 = text[14]?.uz_text;
		price3 = text[15]?.uz_text;
		text1 = text[16]?.uz_text;
		text2 = text[17]?.uz_text;
		text3 = text[18]?.uz_text;
		participate = 'Qatnashish';
	}
	if (lang === 'ru') {
		title = text[9]?.ru_text;
		card_title1 = text[10]?.ru_text;
		card_title2 = text[11]?.ru_text;
		card_title3 = text[12]?.ru_text;
		price1 = text[13]?.ru_text;
		price2 = text[14]?.ru_text;
		price3 = text[15]?.ru_text;
		text1 = text[16]?.ru_text;
		text2 = text[17]?.ru_text;
		text3 = text[18]?.ru_text;
		participate = 'Участвовать';
	}
	if (lang === 'en') {
		title = text[9]?.en_text;
		card_title1 = text[10]?.en_text;
		card_title2 = text[11]?.en_text;
		card_title3 = text[12]?.en_text;
		price1 = text[13]?.en_text;
		price2 = text[14]?.en_text;
		price3 = text[15]?.en_text;
		text1 = text[16]?.en_text;
		text2 = text[17]?.en_text;
		text3 = text[18]?.en_text;
		participate = 'Participate';
	}
	if (lang === 'kz') {
		title = text[9]?.kg_text;
		card_title1 = text[10]?.kg_text;
		card_title2 = text[11]?.kg_text;
		card_title3 = text[12]?.kg_text;
		price1 = text[13]?.kg_text;
		price2 = text[14]?.kg_text;
		price3 = text[15]?.kg_text;
		text1 = text[16]?.kg_text;
		text2 = text[17]?.kg_text;
		text3 = text[18]?.kg_text;
		participate = 'Kатышуу';
	}

	return (
		<section className='gifts-section gifts'>
			<SectionHeader title={title}>
				<div className='cards '>
					<Card
						title={card_title1}
						price={price1}
						subtitle={text1}
						participate={participate}></Card>
					<Card
						title={card_title2}
						price={price2}
						subtitle={text2}
						participate={participate}></Card>

					<Card
						title={card_title3}
						price={price3}
						subtitle={text3}
						participate={participate}></Card>
				</div>
				<div className='message flex mtb'>
					<div className='coin-title '>
						<h1>
							{lang === 'uz' ? text[19]?.uz_text : ''}
							{lang === 'ru' ? text[19]?.ru_text : ''}
							{lang === 'en' ? text[19]?.en_text : ''}
							{lang === 'kz' ? text[19]?.kg_text : ''}
						</h1>
						<p>
							{lang === 'uz' ? text[20]?.uz_text : ''}
							{lang === 'ru' ? text[20]?.ru_text : ''}
							{lang === 'en' ? text[20]?.en_text : ''}
							{lang === 'kz' ? text[20]?.kg_text : ''}
						</p>
					</div>
					<div className='coin-image'>
						<img src={messageImg} alt='coins' />
					</div>
				</div>
			</SectionHeader>
		</section>
	);
};

export default Gift;
