import React, { useState } from "react";
import AuthService from "../services/auth.service";
const dotenv = require('dotenv');

const Login = (props) => {

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
        // props.history.push("/profile");
			  // window.location.reload();
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
    <div className="App">
      <form onSubmit={handleLogin}>
        <div>
          <label>
            Username:
            <input type="text" name="username" value={username} onChange={onChangeUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" name="password" value={password} onChange={onChangePassword}/>
          </label>
        </div>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default Login;