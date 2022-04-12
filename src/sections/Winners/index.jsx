import React from 'react';
import Layout from '../../components/Layout';
import SectionHeader from '../../components/SectionHeader';
import WinnerTable from '../../components/WinnerTable';
import './winner.scss';

const WinnersList = ({text}) => {

	var lang = localStorage.getItem("lang")

	if (lang === "uz"){
		var title = text[21]?.uz_text
		var subtitle = text[22]?.uz_text
	}
	if (lang === "ru"){
		var title = text[21]?.ru_text
		var subtitle = text[22]?.ru_text
	}
	if (lang === "en"){
		var title = text[21]?.en_text
		var subtitle = text[22]?.en_text
	}
	if (lang === "kz"){
		var title = text[21]?.kyr_text
		var subtitle = text[22]?.kyr_text
	}

	return (
		<section className='winner-section'>
			<Layout>
				<SectionHeader
					title={title}
					subtitle={subtitle}>
					<WinnerTable text={text} />
				</SectionHeader>
			</Layout>
		</section>
	);
};

export default WinnersList;
