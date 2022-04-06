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
				<div className='flex mt'>
					<QuestionCard
						title='Абонент Uztelecom'
						subtitle='Если Вы являетесь абонентом Uztelecom, отправьте SMS на 2020!'
						index={1}
					/>
					<QuestionCard
						title='После регистрации'
						subtitle='Вы получите информативное SMS-сообщение, после чего на Ваш персональный счет для баллов будут зачислены Ваши первые баллы! С этого момента Вы начнете ежедневно набирать баллы на Призовые Конкурсы!'
						index={2}
					/>
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
