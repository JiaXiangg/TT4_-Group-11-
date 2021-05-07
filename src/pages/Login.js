import React, { useState, useRef } from "react";
import AuthService from "../services/auth.service";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { Redirect, useHistory } from 'react-router-dom';

const required = (value) => {
	if(!value) {
		return (
			<div className="alert alert-danger" role="alert">
				This field is required!
			</div>
		)
	}
}

const Login = ({isLoggedIn, setisLoggedIn, userData, setUserData}) => {
  const form = useRef();
	const checkBtn = useRef();
  const history = useHistory();

  const [username, setUsername] = useState("Group11");
	const [password, setPassword] = useState("cDAbas6YBrBlhYI");
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
		setUsername(e.target.value);
	}

	const onChangePassword = (e) => {
		setPassword(e.target.value);
	}

  const handleLogin = (e) => {
		e.preventDefault();

    setMessage("");
		setLoading(true);

    AuthService.login(username, password).then(
      () => {
        // Suppose to swap to user details page
        setUserData(AuthService.getCurrentUser());
        setisLoggedIn(true);

        history.replace("/home");
      },
      (error) => {
        const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
          error.message ||
          error.toString();
        
        console.log("failed")
        setLoading(false);
        setMessage(resMessage);
      }
    );

  }

  return ( (!isLoggedIn ? (<div className="col-md-12">
                          <div className="card card-container">
                            <img
                              src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                              alt="profile-img"
                              className="profile-img-card"
                            />

                            <Form onSubmit={handleLogin} ref={form}>
                              <div className="form-group">
                                <label htmlFor="username">
                                  Username
                                </label>
                                <Input 
                                  type="text"
                                  className="form-control"
                                  name="username"
                                  value={username}
                                  onChange={onChangeUsername}
                                  validations={[required]}
                                />
                              </div>

                              <div className="form-group">
                                <label htmlFor="password">
                                  Password
                                </label>
                                <Input 
                                  type="password"
                                  className="form-control"
                                  name="password"
                                  value={password}
                                  onChange={onChangePassword}
                                  validations={[required]}
                                />
                              </div>
                              
                              <div className="form-group">
                                <button className="btn btn-primary btn-block" disabled={loading}>
                                  {loading && (
                                    <span className="spinner-border spinner-border-sm"></span>
                                  )}
                                  <span>Login</span>
                                </button>
                              </div>

                              {message && (
                                <div className="form-group">
                                  <div className="alert alert-danger" role="alert">
                                    Credentials provided are invalid
                                  </div>
                                </div>
                              )}

                              <CheckButton style={{display: "none"}} ref={checkBtn}/>
                            </Form>
                          </div>
                        </div>) 
                        : <div>
                            <div>
                            Already login. Do you want to log out?
                            </div>
                            <button className="btn btn-default" onClick={()=>{setisLoggedIn(false)}}> Logout </button>
                          </div>)
	
	)
}

export default Login;