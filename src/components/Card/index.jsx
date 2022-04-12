import React from 'react';
import './card.scss';

const Card = ({ title, subtitle, price ,participate }) => {
	return (
		<div className='card'>
			<h1>{title}</h1>
			<h3>{price}</h3>
			<p>{subtitle}</p>
			<button>{ participate }</button>
		</div>
	);
};

export default Card;
