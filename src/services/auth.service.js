import axios from "axios"

const API_URL = "https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/";

const login = (username, password) => {
  return axios
  .post(API_URL + "login", {
      username,
      password,
  })
  .then((response) => {
      if(response.data.accessToken) {
          localStorage.setItem("response", JSON.stringify(response.data));
      }

      return response.data;
  });
};

export default {
  login,
};