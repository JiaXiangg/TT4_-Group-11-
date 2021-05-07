import React from "react";
import { Link, Redirect } from "react-router-dom";

const Home = ({ isLoggedIn, onSubmitSignOut, userData, setUserData }) => {
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Welcome to E-Wallet</h2>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/viewaccountdetails">View Account Details</Link>
            </li>
            <li>
              <Link to="/viewtransactiondetails">View Transaction Details</Link>
            </li>
            <li>
              <Link to="/addtransaction">Add Transaction </Link>
            </li>
          </ul>

					<div className="container">
					<header className="jumbotron">
						<h4>Profile Details</h4>
						<h5>
							<p>
								<strong>First Name:</strong> {userData.firstName}
							</p>
							<p>
								<strong>Last Name:</strong> {userData.lastName}
							</p>
							<p>
								<strong>Gender:</strong> {userData.gender}
							</p>
							<p>
								<strong>Age:</strong> {userData.age}
							</p>
							<p>
								<strong>Address:</strong> {userData.address}
							</p>
							<p>
								<strong>Email:</strong> {userData.email}
							</p>
							<p>
								<strong>NRIC:</strong> {userData.nric}
							</p>
							<p>
								<strong>Phone Number:</strong> {userData.phoneNumber}
							</p>
						</h5>
					</header>
					</div>

        </div>


      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

export default Home;
