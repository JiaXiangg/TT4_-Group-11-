import axios from "axios"

const API_URL = "https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/";


const login = (username, password) => {
  return axios.post(API_URL + "login", {
    userName:username,
    userPass:password
  },
  {
    headers: {
      "x-api-key": process.env.REACT_APP_API_KEY,
    },
  }
  )
  .then((response) => {
      localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
    })
      
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  getCurrentUser,
  login,
};