import React from 'react';
import QuestionCard from '../../components/QuestionCard/index';
import SectionHeader from '../../components/SectionHeader';
import './registration.scss';

const Registration = () => {
	return (
		<section className='registration-section mtb'>
			<SectionHeader
				title='Как принять участие'
				subtitle='UzMillion Начните прямо сейчас! Это просто!'>
				<div className='flex align-items-top mt'>
					<QuestionCard
						title='Абонент Uztelecom'
						subtitle='Если Вы являетесь абонентом Uztelecom, отправьте SMS на 2020!'
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
						title='После регистрации'
						subtitle='Вы получите информативное SMS-сообщение, после чего на Ваш персональный счет для баллов будут зачислены Ваши первые баллы! С этого момента Вы начнете ежедневно набирать баллы на Призовые Конкурсы!'
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
						title='Увеличить баллы'
						subtitle='Чтобы увеличить свои баллы Вам нужно правильно отвечать на интересные вопросы Викторины! За один день вы можете отвечать на 20 вопросов бесплатно.'
						index={3}
					/>
				</div>
			</SectionHeader>
		</section>
	);
};

export default Registration;
