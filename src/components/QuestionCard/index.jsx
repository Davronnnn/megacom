import React from 'react';
import circle1 from '../../assets/circle1.png';
import circle2 from '../../assets/circle2.png';
import circle3 from '../../assets/circle3.png';

import './style.scss';

const QuestionCard = ({ title, subtitle, index }) => {
	return (
		<div className='question-card'>
			<div className='circle'>
				{index === 1 ? (
					<img src={circle1} alt='Circle' />
				) : index === 2 ? (
					<img src={circle2} alt='Circle' />
				) : (
					<img src={circle3} alt='Circle' />
				)}
			</div>
			<h1>{title}</h1>
			<p>{subtitle}</p>
		</div>
	);
};

export default QuestionCard;
