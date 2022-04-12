import React from 'react';
import './form.scss';
import messageImg from '../../assets/message-coins.png';
import axios from 'axios';
import Layout from '../../components/Layout';
const FormSection = ({ lang, text }) => {
	const [phone, setPhone] = React.useState('996');
	const [isSuccess, setIsSuccess] = React.useState(false);
	const formHandler = () => {
		axios
			.post(
				`http://megacom.cdialogues.com/api/v1.0/X_VICTORINA/NOTIFY?MSISDN=${phone}&LOGIN=VALADDSERV&PASSWORD=Qa5BA3jA`
			)
			.then((res) => {
				console.log(res);
				setIsSuccess(true);
			})
			.catch((err) => {
				console.log(err);
				setIsSuccess(true);
			});
	};
	return (
		<Layout>
			<div className='message flex mtb'>
				<div className='coin-title '>
					<h1>
						{lang === 'uz' ? text[19]?.uz_text : ''}
						{lang === 'ru' ? text[19]?.ru_text : ''}
						{lang === 'en' ? text[19]?.en_text : ''}
						{lang === 'kz' ? text[19]?.kyr_text : ''}
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
						<button
							onClick={formHandler}
							style={
								isSuccess
									? {
											color: 'green',
											border: ' 1px solid green',
									  }
									: { color: '#58227a' }
							}>
							{isSuccess ? 'Успешно' : 'Отправить'}
						</button>
					</div>
				</div>
				<div className='coin-image'>
					<img src={messageImg} alt='coins' />
				</div>
			</div>
		</Layout>
	);
};

export default FormSection;
