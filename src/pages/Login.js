import React, { useState, useRef, useEffect } from 'react';
import AuthService from '../services/auth.service';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { Redirect, useHistory } from 'react-router-dom';
import AAuthService from '../components/AuthService';
import logo from '../assets/img/dbs-logo.png';
const jwt = require("jsonwebtoken");

const required = (value) => {
	if (!value) {
		return (
			<div className='alert alert-danger' role='alert'>
				This field is required!
			</div>
		);
	}
};

const Login = ({ isLoggedIn, setisLoggedIn, userData, setUserData }) => {
	const form = useRef();
  const history = useHistory();

  const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");

  useEffect (()=>{
    if(isLoggedIn)
      return;

    let token = localStorage.getItem("jwttoken");

    if(!token)
    {
      console.log("no token")
      return;
    }

    jwt.verify(token, process.env.REACT_APP_API_KEY, (err, decoded) => {
      if(err) {
        console.log("Failed to authorized jwt token! " + err)
          return;
      }
      console.log("verified jwt token")
      console.log(decoded)
      AuthService.login(decoded.username, decoded.password).then(
        () => {
          setUserData(AuthService.getCurrentUser());
          AAuthService.authenticate();
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
          
          setLoading(false);
          setMessage(resMessage);
        }
      )

      localStorage.setItem("user", JSON.stringify(decoded));
      setUserData(decoded);
    });

  },[])

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
        setUserData(AuthService.getCurrentUser());
        AAuthService.authenticate();
        if(remember)
        {
          let token = jwt.sign({username: username, password: password}, process.env.REACT_APP_API_KEY, {
            expiresIn: 999
          });
  
          localStorage.setItem("jwttoken", token);
  
          console.log("Saved: " + token)
        }

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
        
        setLoading(false);
        setMessage(resMessage);
      }
    );

  }

	return (
		<div className='col-md-12'>
			<div className='card card-container'>
				<p>
					<img src={logo} alt='Logo' width='100' className='dbs-Logo' />
				</p>

				<Form onSubmit={handleLogin} ref={form}>
					<div className='form-group'>
						<label htmlFor='username'>Username</label>
						<Input
							type='text'
							className='form-control'
							name='username'
							value={username}
							onChange={onChangeUsername}
							validations={[required]}
						/>
					</div>

					<div className='form-group'>
						<label htmlFor='password'>Password</label>
						<Input
							type='password'
							className='form-control'
							name='password'
							value={password}
							onChange={onChangePassword}
							validations={[required]}
						/>
					</div>

					<div className='form-group'>
						<button className='btn btn-primary btn-block' disabled={loading}>
							{loading && (
								<span className='spinner-border spinner-border-sm'></span>
							)}
							<span>Login</span>
						</button>
					</div>

          <div>
            <input type="checkbox" onChange={() => setRemember(!remember)}></input>
            Remember me
          </div>

					{message && (
						<div className='form-group'>
							<div className='alert alert-danger' role='alert'>
								<h3 style={{ color: 'red' }}>
									{' '}
									Credentials provided are invalid{' '}
								</h3>
							</div>
						</div>
					)}
				</Form>
			</div>
		</div>
	);
};

export default Login;
