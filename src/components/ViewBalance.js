import React, { useState } from 'react';
import axios from "axios";

const ViewBalance = ({accountKey, userData }) =>{
	const [accName, setAccName] = useState('');
	const [accNum, setAccNum] = useState('');
	const [availBal, setAvailBal] = useState('');

	const axios = require("axios");

	async function makeViewBalanceRequest() {

		const config = {
			method : "post",
			url : "https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/accounts",
			headers: {"x-api-key": "dONTGMAVVY8v9A85C3Vs7x7id9yvfXB7dn2Idmj5"},
			data : JSON.stringify({
				custID : parseInt(userData.custID),
				accountKey : userData.accountKey,
			}),

		};

		let res = await axios(config);
		setstatusCode(res.data.statusCode);
		setmessage(res.data.message);
		console.log(res.data.statusCode);
		console.log(res.data.message);

	}

	return (
		<div>
			<table className='view-balance'>
				<tr>
					<th>Balance Amount ($)</th>
				</tr>
				<tr>
					<th>Balance Amount ($)</th>
					<td>test</td>
				</tr>
				<tr>
					<th>Balance Amount ($)</th>
					<td>test</td>
				</tr>
			</table>
		</div>
	);
}

export default ViewBalance;
