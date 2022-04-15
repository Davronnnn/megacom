import React from 'react';
import logo from '../assets/logo.png';
import './Navbar.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = ({ load, setLoad, text, lang, setLang }) => {
	const [open, setOpen] = useState(false);
	const [small, setSmall] = useState(false);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', () =>
				setSmall(window.pageYOffset > 50)
			);
		}
	}, []);

	function translation(e) {
		localStorage.setItem('lang', e.target.value);
		setLoad(true);
	}
	const handleClick = () => {
		setOpen((e) => !e);
	};

	const styles = {
		container: {
			height: '32px',
			width: '32px',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			cursor: 'pointer',
			padding: '4px',
		},
		line: {
			height: '2px',
			width: '20px',
			background: 'black',
			transition: 'all 0.2s ease',
		},
		lineTop: {
			transform: open ? 'rotate(45deg)' : 'none',
			transformOrigin: 'top left',
			marginBottom: '5px',
		},
		lineMiddle: {
			opacity: open ? 0 : 1,
			transform: open ? 'translateX(-16px)' : 'none',
		},
		lineBottom: {
			transform: open ? 'translateX(-1px) rotate(-45deg)' : 'none',
			transformOrigin: 'top left',
			marginTop: '5px',
		},
	};

	/* Menu.jsx */
	class Menu extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				open: this.props.open ? this.props.open : false,
			};
		}

		componentWillReceiveProps(nextProps) {
			if (nextProps.open !== this.state.open) {
				this.setState({ open: nextProps.open });
			}
		}

		render() {
			const styles = {
				container: {
					position: 'absolute',
					top: 0,
					left: 0,
					height: this.state.open ? '100%' : 0,
					width: '100vw',
					display: 'flex',
					flexDirection: 'column',
					background: 'black',
					opacity: 0.95,
					color: '#fafafa',
					transition: 'height 0.3s ease',
					zIndex: 2,
				},
				menuList: {
					paddingTop: '3rem',
				},
			};
			return (
				<div style={styles.container}>
					{this.state.open ? (
						<div style={styles.menuList}>{this.props.children}</div>
					) : null}
				</div>
			);
		}
	}

	return (
		<nav className={`header ${small ? 'small-nav' : ''}`}>
			<a target='_blank' rel='noreferrer' href='http://megacom.kg'>
				<img src={logo} alt='Megacom' />
			</a>
			<div
				className='mobile-icon'
				style={styles.container}
				onClick={handleClick}>
				<div style={{ ...styles.line, ...styles.lineTop }} />
				<div style={{ ...styles.line, ...styles.lineMiddle }} />
				<div style={{ ...styles.line, ...styles.lineBottom }} />
			</div>
			<Menu open={open}>{'asdasd'}</Menu>

			<div className='nav-links'>
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
							<p>{text[0]?.kg_text}</p>
						</Link>
						<Link
							to='winners'
							spy={true}
							smooth={true}
							offset={50}
							duration={2000}>
							<p>{text[1]?.kg_text}</p>
						</Link>
						<Link
							to='company'
							spy={true}
							smooth={true}
							offset={50}
							duration={2000}>
							<p>{text[2]?.kg_text}</p>
						</Link>
						<Link
							to='question'
							spy={true}
							smooth={true}
							offset={50}
							duration={2000}>
							<p>{text[3]?.kg_text}</p>
						</Link>
						<Link
							to='footer'
							spy={true}
							smooth={true}
							offset={50}
							duration={2000}>
							<p>{text[4]?.kg_text}</p>
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
			</div>
		</nav>
	);
};

export default Navbar;
