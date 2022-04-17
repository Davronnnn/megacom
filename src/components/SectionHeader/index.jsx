import React from 'react';
import Layout from '../Layout';
import './SectionHeader.scss';

const SectionHeader = ({ title, subtitle, children }) => {
	return (
		<div className='section-header'>
			<Layout>
				<div className='section-header__titles'>
					<h1 className='section-header__titles-title wow fadeInUp'>
						{title}
					</h1>
					<p className='section-header__titles-subtitle'>
						{subtitle}
					</p>
				</div>
				{children}
			</Layout>
		</div>
	);
};

export default SectionHeader;
