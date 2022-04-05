import React from 'react';
import './card.scss';

const Card = ({ title, subtitle, price }) => {
	return (
		<div className='card'>
			<h1>{title}</h1>
			<h3>{price}</h3>
			<p>{subtitle}</p>
			<button>Участвовать</button>
		</div>
	);
};

export default Card;
