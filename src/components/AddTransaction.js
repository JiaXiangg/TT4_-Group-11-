import React, { useEffect, useState } from "react";
import axios from "axios";



const AddTransaction = ({isLoggedIn, accountKey, userData }) =>{

	const [payeeID, setpayeeID] = useState();
	const [transactionsAmount, settransactionAmount] = useState(0);
	const [transcationEGift, settranscationEGift] = useState(false);
	const [transactionMessage, settransactionMessage] = useState(" ");
	const [statusCode, setstatusCode] = useState();
	const [message, setmessage] = useState();


	const axios = require("axios");


	async function makeAddTransactionRequest() {

		const config = {
			method : "post",
			url : "https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add",
			headers: {"x-api-key": "dONTGMAVVY8v9A85C3Vs7x7id9yvfXB7dn2Idmj5"},
			data : JSON.stringify({
				custID : parseInt(userData.custID),
				accountKey : userData.accountKey,
				payeeID : parseInt(payeeID),
				amount : parseInt(transactionsAmount),
				eGift : transcationEGift,
				message : transactionMessage,
			}),

		};

		let res = await axios(config);
		setstatusCode(res.data.statusCode);
		setmessage(res.data.message);
		console.log(res.data.statusCode);
		console.log(res.data.message);

	}

	const onSubmit = () =>{
		makeAddTransactionRequest();
	}

	const payeeIDHandler = (e) =>{
		setpayeeID(e);
	}

	const transactionsAmountHandler = (e) =>{
		settransactionAmount(e);
	}


	const transactionMessageHandler = (e) =>{
		settransactionMessage(e);
	}

	window.console.log(userData);


	return(

		<div>
				<div>
					<label>Payee ID: </label>
					<input 
						type = "text"
						placeholder = "Please Enter the Payee ID"
						value = {payeeID}
						onChange = {(e) => setpayeeID(e.target.value)}
					/>
				</div>

				<div>
					<label>Transaction Amount: </label>
					<input 
						type = "text"
						placeholder = "Please Enter the Transaction Amount"
						value = {transactionsAmount}
						onChange = {(e) => transactionsAmountHandler(e.target.value)}
					/>
				</div>


				<div>
					<label>Transaction Message: </label>
					<input 
						type = "text"
						placeholder = "Please Enter the your Message"
						value = {transactionMessage}
						onChange = {(e) => transactionMessageHandler(e.target.value)}
					/>
				</div>

				<div>
					<label>Transaction E: </label>
					<button 
						onClick = {() => settranscationEGift(!transcationEGift)}> {transcationEGift? "YES" : "NO"}
					</button>
				</div>

				<div>
					<button type = "submit" onClick={onSubmit}>Submit Request</button>
				</div>
				
		</div>
		)	

}

export default AddTransaction;