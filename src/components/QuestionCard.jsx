import React from 'react';
import circle1 from '../assets/circle1.png';
import circle2 from '../assets/circle2.png';
import circle3 from '../assets/circle3.png';
const QuestionCard = ({ title, subtitle, index }) => {
	return (
		<div>
			<div>
				{index === 1 ? (
					<img
						src={circle1}
						width='30px'
						height='30px'
						alt='Circle'
					/>
				) : index === 2 ? (
					<img
						src={circle2}
						width='30px'
						height='30px'
						alt='Circle'
					/>
				) : (
					<img
						src={circle3}
						width='30px'
						height='30px'
						alt='Circle'
					/>
				)}
			</div>
			<h1>{title}</h1>
			<p>{subtitle}</p>
		</div>
	);
};

export default QuestionCard;
