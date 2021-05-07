import React, { useEffect, useState } from "react";
import axios from "axios";


const AddTransaction = ({isLoggedIn, accountKey}) =>{

	const [transcationLog settransactionLog] = useState([])
	const [transactionsAmount, settransactionAmount] = useState();
	const [transcationEGift, settranscationEGift] = useState();
	const [transactionMessage, settransactionMessage] = useState();
	const [phoneNumber, setphoneNumber] = useState();
	const [statusCode, setstatusCode] = useState();
	const [message, setmessage] = useState();


	const axios = require("axios");

	async function = makeAddTransactionRequest() {

		const config = {
			method : "post",
			url : "https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add",
			headers: {"x-api-key": "dONTGMAVVY8v9A85C3Vs7x7id9yvfXB7dn2Idmj5"},
			data : JSON.stringify({
				custID : custID
				accountKey : accountKey
				payeeID : payeeID
				amount : transactionsAmount
				eGift : transcationEGift
				message : transactionMessage
			}),

		};

		let res = await axios(config);
		setstatusCode(res.data.statusCode);
		setmessage(res.data.message);

	}

	

	
}
