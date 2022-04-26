import React, { useState, useEffect } from 'react';
import './form.scss';
import messageImg from '../../assets/message-coins.png';
import axios from 'axios';
import Layout from '../../components/Layout';
const FormSection = ({ text, lang }) => {
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState(
		lang === 'uz'
			? "Jo'natish"
			: lang === 'ru'
			? 'Отправить'
			: lang === 'en'
			? 'Submit'
			: 'Жөнөтүү'
	);

	const [isSuccess, setIsSuccess] = useState(false);
	const [isError, setIsError] = useState(false);

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
				} else if (lang === 'ru') {
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
						} else if (lang === 'ru') {
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
						} else if (lang === 'ru') {
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
			} else if (lang === 'ru') {
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
			<Layout>
				<div className='message flex mtb'>
					<div className='coin-title '>
						<h1 className='wow fadeIn'>
							{lang === 'uz' ? text[45]?.uz_text : ''}
							{lang === 'ru' ? text[45]?.ru_text : ''}
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
					</div>
					<div className='coin-image'>
						<img src={messageImg} alt='coins' />
					</div>
				</div>
			</Layout>
		</section>
	);
};

export default FormSection;
