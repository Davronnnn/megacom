import React from 'react';
import logo from '../assets/logo.png';
import './Navbar.scss';
import { useEffect, useState } from 'react';
// import { Link } from 'react-scroll';

const Navbar = ({ load, setLoad, text }) => {
	const [lang, setLang] = useState(
		localStorage.getItem('lang') ? localStorage.getItem('lang') : 'uz'
	);

	function translation(e) {
		localStorage.setItem('lang', e.target.value);
		setLang(e.target.value);
        setLoad(true)
	}

	return (
		<nav>
			<img src={logo} alt='Megacom' />
			{/* <div className='nav-links'>
				{lang === 'uz' ? (
					<>
						<Link
							to='gifts'
							spy={true}
							smooth={true}
							offset={50}
							duration={500}>
							<p>{text[0]?.uz_text}</p>
						</Link>
						<Link
							to='winners'
							spy={true}
							smooth={true}
							offset={50}
							duration={1000}>
							<p>{text[1]?.uz_text}</p>
						</Link>
						<Link
							to='company'
							spy={true}
							smooth={true}
							offset={50}
							duration={1500}>
							<p>{text[2]?.uz_text}</p>
						</Link>
						<Link
							to='question'
							spy={true}
							smooth={true}
							offset={50}
							duration={2000}>
							<p>{text[3]?.uz_text}</p>
						</Link>
						<Link
							to='footer'
							spy={true}
							smooth={true}
							offset={50}
							duration={2000}>
							<p>{text[4]?.uz_text}</p>
						</Link>
					</>
				) : (
					''
				)}
				{lang === 'en' ? (
					<>
						<Link
							to='gifts'
							spy={true}
							smooth={true}
							offset={50}
							duration={2000}>
							<p>{text[0]?.en_text}</p>
						</Link>
						<Link
							to='winners'
							spy={true}
							smooth={true}
							offset={50}
							duration={2000}>
							<p>{text[1]?.en_text}</p>
						</Link>
						<Link
							to='company'
							spy={true}
							smooth={true}
							offset={50}
							duration={2000}>
							<p>{text[2]?.en_text}</p>
						</Link>
						<Link
							to='question'
							spy={true}
							smooth={true}
							offset={50}
							duration={2000}>
							<p>{text[3]?.en_text}</p>
						</Link>
						<Link
							to='footer'
							spy={true}
							smooth={true}
							offset={50}
							duration={2000}>
							<p>{text[4]?.en_text}</p>
						</Link>
					</>
				) : (
					''
				)}
				{lang === 'kz' ? (
					<>
						<Link
							to='gifts'
							spy={true}
							smooth={true}
							offset={50}
							duration={2000}>
							<p>{text[0]?.kyr_text}</p>
						</Link>
						<Link
							to='winners'
							spy={true}
							smooth={true}
							offset={50}
							duration={2000}>
							<p>{text[1]?.kyr_text}</p>
						</Link>
						<Link
							to='company'
							spy={true}
							smooth={true}
							offset={50}
							duration={2000}>
							<p>{text[2]?.kyr_text}</p>
						</Link>
						<Link
							to='question'
							spy={true}
							smooth={true}
							offset={50}
							duration={2000}>
							<p>{text[3]?.kyr_text}</p>
						</Link>
						<Link
							to='footer'
							spy={true}
							smooth={true}
							offset={50}
							duration={2000}>
							<p>{text[4]?.kyr_text}</p>
						</Link>
					</>
				) : (
					''
				)}
				{lang === 'ru' ? (
					<>
						<Link
							to='gifts'
							spy={true}
							smooth={true}
							offset={50}
							duration={2000}>
							<p>{text[0]?.ru_text}</p>
						</Link>
						<Link
							to='winners'
							spy={true}
							smooth={true}
							offset={50}
							duration={2000}>
							<p>{text[1]?.ru_text}</p>
						</Link>
						<Link
							to='company'
							spy={true}
							smooth={true}
							offset={50}
							duration={2000}>
							<p>{text[2]?.ru_text}</p>
						</Link>
						<Link
							to='question'
							spy={true}
							smooth={true}
							offset={50}
							duration={2000}>
							<p>{text[3]?.ru_text}</p>
						</Link>
						<Link
							to='footer'
							spy={true}
							smooth={true}
							offset={50}
							duration={2000}>
							<p>{text[4]?.ru_text}</p>
						</Link>
					</>
				) : (
					''
				)}

				<select
					name=''
					value={lang}
					id='lang'
					onChange={(e) => translation(e)}>
					<option value='uz'>uz</option>
					<option value='ru'>ru</option>
					<option value='en'>en</option>
					<option value='kz'>kg</option>
				</select>
			</div> */}
		</nav>
	);
};

export default Navbar;
