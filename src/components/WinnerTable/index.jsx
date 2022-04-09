import React from 'react';
import './style.scss';

const WinnerTable = () => {
	return (
		<div className='winner-table'>
			<table class='table table-striped'>
				<thead>
					<tr>
						<th scope='col'></th>
						<th scope='col'></th>
						<th scope='col'>Дата</th>
						<th scope='col'>Номер абонента</th>
						<th scope='col'>Приз</th>
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
