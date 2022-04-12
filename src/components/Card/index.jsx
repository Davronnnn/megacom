import { Link } from 'react-scroll';

import './card.scss';

const Card = ({ title, subtitle, price, participate }) => {
	return (
		<div className='card'>
			<h1>{title}</h1>
			<h3>{price}</h3>
			<p>{subtitle}</p>
			<Link
				to='form'
				spy={true}
				smooth={true}
				offset={50}
				duration={2000}>
				<button>{participate}</button>
			</Link>
		</div>
	);
};

export default Card;
