import React, { useState } from 'react';

function ViewBalance() {
	// const [accName, setAccName] = useState('');
	// const [accNum, setAccNum] = useState('');
	// const [availBal, setAvailBal] = useState('');

	const config = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'x-api-key': '', // Put in API Key that Chad sent in Teams group chat
		},
		body: JSON.stringify({
			custID: 11,
			accountKey: '', // Put in the account key in the spreadsheet
		}),
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const resp = await fetch(
			'', // Put in the API URL here in API document
			config
		);
		const data = await resp.json();
		console.log(data);
	};

	return (
		<div>
			<table className='view-balance'>
				<button onClick={handleSubmit}>Click me!</button>

				<tr>
					<th>Balance Amount ($)</th>
				</tr>
				<tr>
					<td>test</td>
				</tr>
			</table>
		</div>
	);
}

export default ViewBalance;
