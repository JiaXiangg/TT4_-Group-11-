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
              <Link to="/viewaccountdetails">View Account Details</Link>
            </li>
            <li>
              <Link to="/viewtransactiondetails">View Transaction Details</Link>
            </li>
            <li>
              <Link to="/addtransaction">Add Transaction </Link>
            </li>
          </ul>
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

export default Home;
