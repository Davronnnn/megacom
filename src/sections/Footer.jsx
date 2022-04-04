import React from 'react';
import Layout from '../components/Layout';

const Footer = () => {
	return (
		<footer>
			<Layout>
				<div>
					<p>Условия и положения</p>
					<button>Скачать</button>
				</div>
				<div>
					<p>
						© 2022 ЗАО «Альфа Телеком», Лицензии ГАС КР №14-1133 от
						19.12.14, №18-0326 от 25.06.2018, №18-0303 от
						30.05.2018, №15-1446-КР от 01.10.15, №16-0090 и 18-0261
						от 04.01.2018.
					</p>
				</div>
			</Layout>
		</footer>
	);
};

export default Footer;
