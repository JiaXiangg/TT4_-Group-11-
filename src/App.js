import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation} from "react-router-dom";
import { Link } from 'react-router-dom';
import makeAddTransactionRequest from './components/AddTransaction'
import AuthService from './components/AuthService'
import PrivateRoute from './components/PrivateRouter'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Home from './pages/Home'
import AddTransaction from './components/AddTransaction'
import TransactionHist from './pages/TransactionHist';
// import ViewAccountDetails from './components/AddTransaction'

function App(){
  const [custID, setCustID] = useState("");
  const [accountKey, setaccountKey] = useState("");
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const onSubmitSignOut = (e) => {
    AuthService.signout();
    e.preventDefault();
    setisLoggedIn(false)
  }
    return(
      <div>
        <Router>
          <div>
            <ul>
              <li><Link to='/home'>Home</Link></li>
              <li><Link to='/login'>View Account Details</Link></li>
              <li><Link to='/viewaccountdetails'>Login</Link></li>
              <li><Link to='/viewtransactiondetails'>View Transaction Details</Link></li>
              <li><Link to='/addtransaction'>Add Transaction </Link></li>
            </ul>

            <Route exact path = '/home'>
              <Home isLoggedIn = { isLoggedIn } onSubmitSignOut = { onSubmitSignOut } accountkey ={accountKey} setaccountKey={setaccountKey} />
            </Route>

            <Route exact path = '/login'>
              <Login isLoggedIn = { isLoggedIn } setisLoggedIn = { setisLoggedIn } />
            </Route>

            {/* <PrivateRoute exact path = '/viewaccountdetails'>
              <ViewAccountDetails accountkey ={ accountKey }/>
            </PrivateRoute>
            */}

            <PrivateRoute exact path = '/viewtransactiondetails'>
              <TransactionHist accountkey ={ accountKey } custID={custID} />
            </PrivateRoute>


            <PrivateRoute exact path = '/addtransaction'>
              <AddTransaction accountkey ={ accountKey }/>
            </PrivateRoute>

          </div>
        </Router>

      </div>

    )

};

export default App;
