import React from 'react';
import Layout from '../../components/Layout';
import SectionHeader from '../../components/SectionHeader';
import WinnerTable from '../../components/WinnerTable';
import './winner.scss';

const WinnersList = ({ text }) => {
	var lang = localStorage.getItem('lang');
	let title = '';
	let subtitle = '';
	if (lang === 'uz') {
		title = text[21]?.uz_text;
		subtitle = text[22]?.uz_text;
	}
	if (lang === 'ru') {
		title = text[21]?.ru_text;
		subtitle = text[22]?.ru_text;
	}
	if (lang === 'en') {
		title = text[21]?.en_text;
		subtitle = text[22]?.en_text;
	}
	if (lang === 'kz') {
		title = text[21]?.kyr_text;
		subtitle = text[22]?.kyr_text;
	}

	return (
		<section className='winner-section winners'>
			<Layout>
				<SectionHeader title={title} subtitle={subtitle}>
					<WinnerTable text={text} />
				</SectionHeader>
			</Layout>
		</section>
	);
};

export default WinnersList;
