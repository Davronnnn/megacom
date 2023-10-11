import React,{useEffect,useRef} from 'react';
import { Link } from 'react-scroll';

import './Hero.scss';
<<<<<<< HEAD
import heroImg from '../../assets/hero-bg-image.png';
=======
import heroMoney1 from '../../assets/money1.png';
import heroMoney2 from '../../assets/money2.png';
import heroMoney3 from '../../assets/money3.png';
>>>>>>> 76abfb7bc60688a7329fc52fc049da42195dad27



const Hero = ({ load, lang, setLang, setLoad, text }) => {

	const img1 = useRef()
	const img2 = useRef()
	const img3= useRef()

	// useEffect(() => {
	  
	
	  
	// }, []);

	document.addEventListener('mousemove', (e) => {
		// Get the current cursor position
		const x = e.clientX;
		const y = e.clientY;
		const random = Math.random();
	
		// Define different positions for each element
		const position1 = { x: x/10 , y: -y / 5 };
		const position2 = { x: -x/40 , y: -y/20  };
		const position3 = { x: x / 15, y: y / 15 };
	
		// Update the elements' positions with smoother transitions
		img1.current.style.transform = `translate(${position1.x}px, ${position1.y}px)`;
		img2.current.style.transform = `translate(${position2.x}px, ${position2.y}px)`;
		img3.current.style.transform = `translate(${position3.x}px, ${position3.y}px)`;
	});
	


	return (
		<section className='hero'>
			<div className='hero__content wow fadeInUp'>
	

				<h1 className='hero__content__title'>
					{lang === "Рус" ? "ВЫИГРАЙ" : "УТУП АЛ" } 	
				</h1>
				<h4 className='hero__content__price'>3 000 000</h4>
				<p
					className=' hero__content__text'
					data-wow-duration='0.6s'
					data-wow-delay='0.3s'>
					{/* {lang === 'uz' ? text[6]?.uz_text : ''} */}
					{lang === 'Рус' ? text[6]?.ru_text : ''}
					{/* {lang === 'en' ? text[6]?.en_text : ''} */}
					{lang === 'kz' ? text[6]?.kg_text : ''}
				</p>
				<div className='hero__buttons '>
					<button className='hero__button hero__button-active'>
						<Link
							to='form'
							spy={true}
							smooth={true}
							offset={50}
							duration={2000}>
							{/* {lang === 'uz' ? text[7]?.uz_text : ''} */}
							{lang === 'Рус' ? text[7]?.ru_text : ''}
							{/* {lang === 'en' ? text[7]?.en_text : ''} */}
							{lang === 'kz' ? text[7]?.kg_text : ''}
						</Link>
					</button>
					<button className='hero__button'>
						<Link
							to='company'
							spy={true}
							smooth={true}
							offset={50}
							duration={2000}>
							{/* {lang === 'uz' ? text[8]?.uz_text : ''} */}
							{lang === 'Рус' ? text[8]?.ru_text : ''}
							{/* {lang === 'en' ? text[8]?.en_text : ''} */}
							{lang === 'kz' ? text[8]?.kg_text : ''}
						</Link>
					</button>
				</div>
			</div>

			<div className='hero__bg'>
				{/* <picture className='hero__bg-picture'>
					<img
						data-wow-duration='0.5s'
						data-wow-delay='0.2s'
						src={heroImg}
						width='900'
						height='327'
						alt='hero-bg'
					/>
				</picture> */}
				<img ref={img1} src={heroMoney1} alt="hero money" />
				<img ref={img2} src={heroMoney2} alt="hero money" />
				<img ref={img3} src={heroMoney3} alt="hero money" />
			</div>
		</section>
	);
};

export default Hero;
