import React from 'react';
import Card from '../../components/Card/index.jsx';
import SectionHeader from '../../components/SectionHeader';
import messageImg from '../../assets/message-coins.png';
import './gifts.scss';

const Gift = ({text}) => {

    var lang = localStorage.getItem("lang");

	if (lang === "uz"){
		var title = text[9]?.uz_text
		var card_title1 = text[10]?.uz_text
		var card_title2 = text[11]?.uz_text
		var card_title3 = text[12]?.uz_text
		var price1 = text[13]?.uz_text
		var price2 = text[14]?.uz_text
		var price3 = text[15]?.uz_text
		var text1 = text[16]?.uz_text
		var text2 = text[17]?.uz_text
		var text3 = text[18]?.uz_text
		var participate = "Qatnashish"
	}
	if (lang === "ru"){
		title = text[9]?.ru_text
		card_title1 = text[10]?.ru_text
		card_title2 = text[11]?.ru_text
		card_title3 = text[12]?.ru_text
		price1 = text[13]?.ru_text
		price2 = text[14]?.ru_text
		price3 = text[15]?.ru_text
		text1 = text[16]?.ru_text
		text2 = text[17]?.ru_text
		text3 = text[18]?.ru_text
		participate = "Участвовать"
	}
	if (lang === "en"){
		title = text[9]?.en_text
		card_title1 = text[10]?.en_text
		card_title2 = text[11]?.en_text
		card_title3 = text[12]?.en_text
		price1 = text[13]?.en_text
		price2 = text[14]?.en_text
		price3 = text[15]?.en_text
		text1 = text[16]?.en_text
		text2 = text[17]?.en_text
		text3 = text[18]?.en_text
		participate = "Participate"
	}
	if (lang === "kz"){
		title = text[9]?.kyr_text
		card_title1 = text[10]?.kyr_text
		card_title2 = text[11]?.kyr_text
		card_title3 = text[12]?.kyr_text
		price1 = text[13]?.kyr_text
		price2 = text[14]?.kyr_text
		price3 = text[15]?.kyr_text
		text1 = text[16]?.kyr_text
		text2 = text[17]?.kyr_text
		text3 = text[18]?.kyr_text
		participate = "Kатышуу"
	}

	return (
		<section className='gifts-section'>
			<SectionHeader title={title}>
				<div className='cards '>
					<Card
						title={card_title1}
						price={price1}
						subtitle={text1}
						participate={participate}
						></Card>
					<Card
						title={card_title2}
						price={price2}
						subtitle={text2}
						participate={participate}
						></Card>
						
					<Card
						title={card_title3}
						price={price3}
						subtitle={text3}
						participate={participate}
						></Card>
				</div>
				<div className='message flex mtb'>
					<div className='coin-title '>
						<h1>
							{
								lang === "uz" ? text[19]?.uz_text : ""
							}
							{
								lang === "ru" ? text[19]?.ru_text : ""
							}
							{
								lang === "en" ? text[19]?.en_text : ""
							}
							{
								lang === "kz" ? text[19]?.kyr_text : ""
							}
						</h1>
						<p>
						{
								lang === "uz" ? text[20]?.uz_text : ""
							}
							{
								lang === "ru" ? text[20]?.ru_text : ""
							}
							{
								lang === "en" ? text[20]?.en_text : ""
							}
							{
								lang === "kz" ? text[20]?.kyr_text : ""
							}
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
