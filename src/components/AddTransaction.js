import React, { useEffect, useState } from "react";
import axios from "axios";


const AddTransaction = ({isLoggedIn, accountKey, custID }) =>{

	const [payeeID, setpayeeID] = useState();
	const [transactionsAmount, settransactionAmount] = useState();
	const [transcationEGift, settranscationEGift] = useState();
	const [transactionMessage, settransactionMessage] = useState();
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

	useEffect(() => {
		makeAddTransactionRequest();
	},[])


	const transactionsAmountHandler = (e) =>{
		settransactionAmount(e);
	}

	const transcationEGiftHandler = (e) =>{
		settransactionAmount(e);
	}

	const transactionMessageHandler = (e) =>{
		settransactionMessage(e);
	}





	return(

		<div>
			<form>
			<div>
				<label>Transaction Amount: </label>
				<input 
					type = "text"
					placeholder = "Please Enter the Transaction Amount"
					value = {transactionsAmount}
					onChange = {(e) => transactionsAmountHandler(e.target.value)}
				/>
			</div>

		)

	
}
