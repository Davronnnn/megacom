import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './form.scss';

const FormSection = ({ text, lang }) => {
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState(
		lang === 'uz'
			? "Jo'natish"
			: lang === 'Рус'
			? 'Отправить'
			: lang === 'en'
			? 'Submit'
			: 'Жөнөтүү'
	);

	const [isSuccess, setIsSuccess] = useState(false);
	const [isError, setIsError] = useState(false);

	let appText = '';

	if (lang === 'uz') {
		appText = text[48]?.uz_text ? text[48]?.uz_text : '';
	} else if (lang === 'Рус') {
		appText = text[48]?.ru_text ? text[48]?.ru_text : '';
	} else if (lang === 'en') {
		appText = text[48]?.en_text ? text[48]?.en_text : '';
	} else {
		appText = text[48]?.kg_text ? text[48]?.kg_text : '';
	}

	let appStoreLink = text[48]?.name ? text[48]?.name : '';
	let playMarketLink = text[47]?.name ? text[47]?.name : '';

	useEffect(() => {
		let time = localStorage.getItem('time');
		let currentTime = new Date().getMinutes();
		if (currentTime - time >= 5) {
			localStorage.removeItem('time');
		}
	}, []);

	const formHandler = () => {
		let time = localStorage.getItem('time');
		let currentTime = new Date().getMinutes();

		if (phone.length == 12) {
			if (currentTime - time <= 1) {
				localStorage.removeItem('time');

				setIsSuccess(true);
				setIsError(false);
				if (lang === 'uz') {
					setMessage("Ro'yhatdan o'tilgan");
				} else if (lang === 'Рус') {
					setMessage('Зарегистрировано');
				} else if (lang === 'en') {
					setMessage('Registered');
				} else {
					setMessage('Катталган');
				}
				setPhone('');
				localStorage.setItem('time', new Date().getMinutes());
			}
			if (!time) {
				localStorage.setItem('time', currentTime);
				axios
					.post(
						`https://megacom.cdialogues.com/api/v1.0/X_VICTORINA/NOTIFY?MSISDN=${phone}&LOGIN=VALADDSERV&PASSWORD=Qa5BA3jA`
					)
					.then((res) => {
						setIsSuccess(true);
						setIsError(false);
						if (lang === 'uz') {
							setMessage('Muvaffaqqiyatli');
						} else if (lang === 'Рус') {
							setMessage('Успешный');
						} else if (lang === 'en') {
							setMessage('Successful');
						} else {
							setMessage('Ийгиликтүү');
						}
						setPhone('');
						localStorage.setItem('time', new Date().getMinutes());
					})
					.catch((err) => {
						setIsError(true);
						if (lang === 'uz') {
							setMessage('Muvaffaqqiyatsiz');
						} else if (lang === 'Рус') {
							setMessage('Неуспешный');
						} else if (lang === 'en') {
							setMessage('Failed');
						} else {
							setMessage('Ийгиликсиз');
						}
					});
			}
		} else {
			setIsSuccess(false);
			setIsError(true);
			if (lang === 'uz') {
				setMessage('Muvaffaqqiyatsiz');
			} else if (lang === 'Рус') {
				setMessage('Неуспешный');
			} else if (lang === 'en') {
				setMessage('Failed');
			} else {
				setMessage('Ийгиликсиз');
			}
		}
	};
	return (
		<section className='form-section form'>
			<div className='message flex mtb'>
				<div className='coin-title '>
					<h1 className='wow fadeIn'>
						{lang === 'uz' ? text[45]?.uz_text : ''}
						{lang === 'Рус' ? text[45]?.ru_text : ''}
						{lang === 'en' ? text[45]?.en_text : ''}
						{lang === 'kz' ? text[45]?.kg_text : ''}
					</h1>
					<div className='submits'>
						<input
							type='text'
							placeholder='996ХХХХХХХХХ '
							value={phone}
							onChange={(e) => {
								setPhone(e.target.value);
							}}
						/>
						{isSuccess ? (
							<button
								onClick={formHandler}
								style={{
									color: 'green',
									border: ' 1px solid green',
								}}>
								{message}
							</button>
						) : (
							<button
								onClick={formHandler}
								style={
									isSuccess && !isError
										? {
												color: 'green',
												border: ' 1px solid green',
										  }
										: { color: '#58227a' }
								}>
								{message}
							</button>
						)}
					</div>
					<div className='application'>
						<a href={playMarketLink}>
							<button className='application-button'>
								{appText}
							</button>
						</a>
						<div className='icons'>
							<a href={playMarketLink}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 48 48'
									width='48px'
									height='48px'>
									<path
										fill='#4db6ac'
										d='M7.705,4.043C7.292,4.15,7,4.507,7,5.121c0,1.802,0,18.795,0,18.795S7,42.28,7,43.091c0,0.446,0.197,0.745,0.5,0.856l20.181-20.064L7.705,4.043z'
									/>
									<path
										fill='#dce775'
										d='M33.237,18.36l-8.307-4.796c0,0-15.245-8.803-16.141-9.32C8.401,4.02,8.019,3.961,7.705,4.043l19.977,19.84L33.237,18.36z'
									/>
									<path
										fill='#d32f2f'
										d='M8.417,43.802c0.532-0.308,15.284-8.825,24.865-14.357l-5.601-5.562L7.5,43.947C7.748,44.038,8.066,44.004,8.417,43.802z'
									/>
									<path
										fill='#fbc02d'
										d='M41.398,23.071c-0.796-0.429-8.1-4.676-8.1-4.676l-0.061-0.035l-5.556,5.523l5.601,5.562c4.432-2.559,7.761-4.48,8.059-4.653C42.285,24.248,42.194,23.5,41.398,23.071z'
									/>
								</svg>
							</a>
							<a href={appStoreLink}>
								{/* <img
										src={appstoreIcon}
										alt='appstore link'
										srcset=''
									/> */}
							</a>
						</div>
					</div>
				</div>
				<div className='coin-image'>
					{/* <img src={messageImg} alt='coins' /> */}
				</div>
			</div>
		</section>
	);
};

export default FormSection;
