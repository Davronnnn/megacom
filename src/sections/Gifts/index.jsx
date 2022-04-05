import React from 'react';
import Card from '../../components/Card/index.jsx';
import SectionHeader from '../../components/SectionHeader';
import messageImg from '../../assets/message-coins.png';
const Gift = () => {
	return (
		<section className='gifts-section'>
			<SectionHeader title='Призы'>
				<div className='cards flex-c-around'>
					<Card
						title='Каждый день'
						price='10 000 сум'
						subtitle='Каждый день участник, набравший наибольшее количество баллов за соответствующий последний недельный период месяца, станет победителем 50 000 000 сум!'></Card>
					<Card
						title='09/03/2021-26/12/2021'
						price='KIA RIO'
						subtitle='В последнее воскресенье декабря (26.12.2021) участник, набравший наибольшее количество баллов со вторника 09.03.2021 до дня конкурса (воскресенье 26.12.2021) выиграет МЕГА ПРИЗ!'></Card>
					<Card
						title='Каждый месяц'
						price='100 000 сум'
						subtitle='Каждый месяц участник, набравший наибольшее количество баллов за соответствующий последний недельный период месяца, станет победителем 50 000 000 сум!'></Card>
				</div>
			</SectionHeader>

			<div className='message flex'>
				<div>
					<h1>Отправьте sms на 2020!</h1>
					<p>
						font-family: 'Roboto'; font-style: normal; font-weight:
						400; font-size: 17px; line-height: 20px; color: rgba(45,
						29, 63, 0.8);
					</p>
				</div>
				<div>
					<img src={messageImg} alt='coins' />
				</div>
			</div>
		</section>
	);
};

export default Gift;
