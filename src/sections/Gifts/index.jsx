import React from 'react';
import Card from '../../components/Card/index.jsx';
import SectionHeader from '../../components/SectionHeader';
import messageImg from '../../assets/message-coins.png';
import './gifts.scss';

const Gift = ({text}) => {

    var lang = localStorage.getItem("lang");

	if (lang == "uz"){
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
	if (lang == "ru"){
		var title = text[9]?.ru_text
		var card_title1 = text[10]?.ru_text
		var card_title2 = text[11]?.ru_text
		var card_title3 = text[12]?.ru_text
		var price1 = text[13]?.ru_text
		var price2 = text[14]?.ru_text
		var price3 = text[15]?.ru_text
		var text1 = text[16]?.ru_text
		var text2 = text[17]?.ru_text
		var text3 = text[18]?.ru_text
		var participate = "Участвовать"
	}
	if (lang == "en"){
		var title = text[9]?.en_text
		var card_title1 = text[10]?.en_text
		var card_title2 = text[11]?.en_text
		var card_title3 = text[12]?.en_text
		var price1 = text[13]?.en_text
		var price2 = text[14]?.en_text
		var price3 = text[15]?.en_text
		var text1 = text[16]?.en_text
		var text2 = text[17]?.en_text
		var text3 = text[18]?.en_text
		var participate = "Participate"
	}
	if (lang == "kz"){
		var title = text[9]?.kyr_text
		var card_title1 = text[10]?.kyr_text
		var card_title2 = text[11]?.kyr_text
		var card_title3 = text[12]?.kyr_text
		var price1 = text[13]?.kyr_text
		var price2 = text[14]?.kyr_text
		var price3 = text[15]?.kyr_text
		var text1 = text[16]?.kyr_text
		var text2 = text[17]?.kyr_text
		var text3 = text[18]?.kyr_text
		var participate = "Kатышуу"
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
						<h1>Отправьте sms на 2020!</h1>
						<p>
							Наберите наибольшее количество баллов и выиграйте!
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
