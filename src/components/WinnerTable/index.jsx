import React from 'react';
import './style.scss';

const WinnerTable = ({ text }) => {
	var lang = localStorage.getItem('lang');

	return (
		<div className='winner-table'>
			<table class='table table-striped wow fadeIn'>
				<thead>
					<tr>
						<th scope='col'></th>
						<th scope='col'></th>
						<th scope='col'>
							{lang === 'uz' ? text[23]?.uz_text : ''}
							{lang === 'ru' ? text[23]?.ru_text : ''}
							{lang === 'en' ? text[23]?.en_text : ''}
							{lang === 'kz' ? text[23]?.kg_text : ''}
						</th>
						<th scope='col'>
							{lang === 'uz' ? text[24]?.uz_text : ''}
							{lang === 'ru' ? text[24]?.ru_text : ''}
							{lang === 'en' ? text[24]?.en_text : ''}
							{lang === 'kz' ? text[24]?.kg_text : ''}
						</th>
						<th scope='col'>
							{lang === 'uz' ? text[25]?.uz_text : ''}
							{lang === 'ru' ? text[25]?.ru_text : ''}
							{lang === 'en' ? text[25]?.en_text : ''}
							{lang === 'kz' ? text[25]?.kg_text : ''}
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope='row'></th>
						<th scope='row'>1</th>
						<td>09.03.2020</td>
						<td>09.03.2020</td>
						<td>09.03.2020</td>
					</tr>
					<tr>
						<th scope='row'></th>
						<th scope='row'>2</th>
						<td>998 99****116</td>
						<td>998 99****116</td>
						<td>998 99****116</td>
					</tr>
					<tr>
						<th scope='row'></th>
						<th scope='row'>3</th>
						<td>2 000 000 UZS</td>
						<td>2 000 000 UZS</td>
						<td>2 000 000 UZS</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default WinnerTable;
