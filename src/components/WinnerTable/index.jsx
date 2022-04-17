import axios from 'axios';
import React, { useEffect, useState, useMemo } from 'react';
import './style.scss';
import Pagination from '../Pagination';
let PageSize = 3;

const WinnerTable = ({ text, lang }) => {
	const [winners, setWinnsers] = useState([]);

	useEffect(() => {
		axios
			.get('https://backend.megacom.win/translation/get-winners')

			.then((res) => {
				setWinnsers(res.data);
			});
	}, []);

	const [currentPage, setCurrentPage] = useState(1);

	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		return winners.slice(firstPageIndex, lastPageIndex);
	}, [currentPage, winners]);

	return (
		<div className='winner-table'>
			<table className='table table-striped wow fadeIn'>
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
					{/* {winners.map((winner, index) => (
						<tr key={index}>
							<th scope='row'></th>
							<th scope='row'>{index + 1}</th>
							<td>{winner.date}</td>
							<td>{winner.phone_number}</td>
							<td>{winner.prize}</td>
						</tr>
					))} */}
					{currentTableData.map((winner, index) => (
						<tr key={index}>
							<th scope='row'></th>
							<th scope='row'>{index + 1}</th>
							<td>{winner.date}</td>
							<td>{winner.phone_number}</td>
							<td>{winner.prize}</td>
						</tr>
					))}
				</tbody>
			</table>
			<Pagination
				className='pagination-bar'
				currentPage={currentPage}
				totalCount={winners.length}
				pageSize={PageSize}
				onPageChange={(page) => setCurrentPage(page)}
			/>
		</div>
	);
};

export default WinnerTable;
