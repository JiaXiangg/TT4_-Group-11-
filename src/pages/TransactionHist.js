import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function TransactionHist(props) {
	const { userData } = props;
	const { accountKey, custID } = userData;
	const [transactionHist, setTransactionHist] = useState([]);
	const apiLink =
		'https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view';

	const tableHeader = [
		'Customer ID',
		'Payee ID',
		'Amount ($)',
		'eGift',
		'Date',
		'Expense Cat',
		'Message',
	];

	const dataHeader = [
		'custID',
		'payeeID',
		'amount',
		'eGift',
		'datetime',
		'expenseCat',
		'message',
	];

	const getTransactionDetails = () => {
		axios
			.post(
				apiLink,
				{ custID: custID, accountKey: accountKey },
				{ headers: { 'x-api-key': process.env.REACT_APP_API_KEY } }
			)
			.then((res) => {
				console.log(res.data);
				setTransactionHist(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		getTransactionDetails();
	}, []);

	return (
		<div>
			<div>
				<Link to='/home'>Home</Link>
			</div>
			<div>
				<table class='table'>
					<thead>
						<tr>
							<th scope='col'>#</th>
							{tableHeader.map((data, key) => (
								<th scope='col'>{data}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{transactionHist.map((data, i) => (
							<tr key={i}>
								<th scope='row'>{i + 1}</th>
								{dataHeader.map((header, j) =>
									header === 'datetime' ? (
										<td key={j}>{new Date(data[header] * 1000).toString()}</td>
									) : header === 'eGift' ? (
										<td key={j}>{data[header] ? <p>&#10004;</p> : <p>X</p>}</td>
									) : (
										<td key={j}>{data[header]}</td>
									)
								)}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
