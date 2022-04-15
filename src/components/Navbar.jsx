import React from 'react';
import logo from '../assets/logo.png';
import './Navbar.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = ({ load, setLoad, text }) => {
	const [lang, setLang] = useState(
		localStorage.getItem('lang') ? localStorage.getItem('lang') : 'uz'
	);
	const [open, setOpen] = useState();

	function translation(e) {
		localStorage.setItem('lang', e.target.value);
		setLang(e.target.value);
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
		<nav>
			<img src={logo} alt='Megacom' />
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
			</div>
		</nav>
	);
};

export default Navbar;

/* App.jsx */
// class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state={
//       menuOpen:false,
//     }
//   }

//   handleMenuClick() {
//     this.setState({menuOpen:!this.state.menuOpen});
//   }

//   handleLinkClick() {
//     this.setState({menuOpen: false});
//   }

//   render(){
//     const styles=
//       {
//         container:{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           zIndex: '99',
//           opacity: 0.9,
//           display:'flex',
//           alignItems:'center',
//           background: 'black',
//           width: '100%',
//           color: 'white',
//           fontFamily:'Lobster',
//         },
//         logo: {
//           margin: '0 auto',
//         },
//         body: {
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           width: '100vw',
//           height: '100vh',
//           filter: this.state.menuOpen ? 'blur(2px)':null,
//           transition: 'filter 0.5s ease',
//         },
//       }
//     const menu = ['About Us','Our Products','Services','FAQ','Contact Us']
//     const menuItems = menu.map((val,index)=>{
//       return (
//         <MenuItem
//           key={index}
//           delay={`${index * 0.1}s`}
//           onClick={()=>{this.handleLinkClick();}}>{val}</MenuItem>)
//     });

//     return(
//       <div>
//         <div style={styles.container}>
//           <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color='white'/>
//           <div style={styles.logo}>Logo</div>
//         </div>
//         <Menu open={this.state.menuOpen}>
//           {menuItems}
//         </Menu>
//         <div style={styles.body}>

//         </div>
//       </div>
//     )
//   }
// }

/* MenuItem.jsx*/
// class MenuItem extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       hover:false,
//     }
//   }

//   handleHover(){
//     this.setState({hover:!this.state.hover});
//   }

//   render(){
//     const styles={
//       container: {
//         opacity: 0,
//         animation: '1s appear forwards',
//         animationDelay:this.props.delay,
//       },
//       menuItem:{
//         fontFamily:`'Open Sans', sans-serif`,
//         fontSize: '1.2rem',
//         padding: '1rem 0',
//         margin: '0 5%',
//         cursor: 'pointer',
//         color: this.state.hover? 'gray':'#fafafa',
//         transition: 'color 0.2s ease-in-out',
//         animation: '0.5s slideIn forwards',
//         animationDelay:this.props.delay,

//       },
//       line: {
//         width: '90%',
//         height: '1px',
//         background: 'gray',
//         margin: '0 auto',
//         animation: '0.5s shrink forwards',
//         animationDelay:this.props.delay,

//       }
//     }
//     return(
//       <div style={styles.container}>
//         <div
//           style={styles.menuItem}
//           onMouseEnter={()=>{this.handleHover();}}
//           onMouseLeave={()=>{this.handleHover();}}
//           onClick={this.props.onClick}
//         >
//           {this.props.children}
//         </div>
//       <div style={styles.line}/>
//     </div>
//     )
//   }
// }

// /* Menu.jsx */
// class Menu extends React.Component {
//   constructor(props){
//     super(props);
//     this.state={
//       open: this.props.open? this.props.open:false,
//     }
//   }

//   componentWillReceiveProps(nextProps){
//     if(nextProps.open !== this.state.open){
//       this.setState({open:nextProps.open});
//     }
//   }

//   render(){
//     const styles={
//       container: {
//         position: 'absolute',
//         top: 0,
//         left: 0,
//         height: this.state.open? '100%': 0,
//         width: '100vw',
//         display: 'flex',
//         flexDirection: 'column',
//         background: 'black',
//         opacity: 0.95,
//         color: '#fafafa',
//         transition: 'height 0.3s ease',
//         zIndex: 2,
//       },
//       menuList: {
//         paddingTop: '3rem',
//       }
//     }
//     return(
//       <div style={styles.container}>
//         {
//           this.state.open?
//             <div style={styles.menuList}>
//               {this.props.children}
//             </div>:null
//         }
//       </div>
//     )
//   }
// }

// /* MenuButton.jsx */
// class MenuButton extends React.Component {
//   constructor(props){
//     super(props);
//     this.state={
//       open: this.props.open? this.props.open:false,
//       color: this.props.color? this.props.color:'black',
//     }
//   }

//   componentWillReceiveProps(nextProps){
//     if(nextProps.open !== this.state.open){
//       this.setState({open:nextProps.open});
//     }
//   }

//   handleClick(){
//   this.setState({open:!this.state.open});
//   }

//   render(){
//     const styles = {
//       container: {
//         height: '32px',
//         width: '32px',
//         display:'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         cursor: 'pointer',
//         padding: '4px',
//       },
//       line: {
//         height: '2px',
//         width: '20px',
//         background: this.state.color,
//         transition: 'all 0.2s ease',
//       },
//       lineTop: {
//         transform: this.state.open ? 'rotate(45deg)':'none',
//         transformOrigin: 'top left',
//         marginBottom: '5px',
//       },
//     /* Main.jsx */    transform: this.state.open ? 'translateX(-16px)':'none',
//       },
//       lineBottom: {
//         transform: this.state.open ? 'translateX(-1px) rotate(-45deg)':'none',
//         transformOrigin: 'top left',
//         marginTop: '5px',
//       },
//     }
//     return(
//       <div style={styles.container}
//         onClick={this.props.onClick ? this.props.onClick:
//           ()=> {this.handleClick();}}>
//         <div style={{...styles.line,...styles.lineTop}}/>
//         <div style={{...styles.line,...styles.lineMiddle}}/>
//         <div style={{...styles.line,...styles.lineBottom}}/>
//       </div>
//     )
//   }
// }
