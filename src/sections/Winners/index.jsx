import React from 'react';
import Layout from '../../components/Layout';
import SectionHeader from '../../components/SectionHeader';
import WinnerTable from '../../components/WinnerTable';

const WinnersList = () => {
	return (
		<section className='winner-section'>
			<Layout>
				<SectionHeader
					title='Список победителей'
					subtitle='Таблица с именами победителей и соответствующими призами'>
					<WinnerTable />
				</SectionHeader>
			</Layout>
		</section>
	);
};

export default WinnersList;
