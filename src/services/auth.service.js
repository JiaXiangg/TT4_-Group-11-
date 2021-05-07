import axios from "axios"

const API_URL = "https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/";


const login = (username, password) => {

  return axios.post(API_URL + "login", {
    userName:username,
    userPass:password
  },
  {
    headers: {
      "x-api-key": "dONTGMAVVY8v9A85C3Vs7x7id9yvfXB7dn2Idmj5",
    },
  }
  )
  .then((response) => {

      console.log(response.data)
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

/*
{phoneNumber: "(+65) 81920299", accountKey: "fkgmcqt3-hd0i-jn6c-p53w-cmrpjatko8g", custID: 11, lastName: "Thorton", address: "2842 Hurley Rapid↵Nathanstad, ID 04292", …}
accountKey: "fkgmcqt3-hd0i-jn6c-p53w-cmrpjatko8g"
address: "2842 Hurley Rapid\nNathanstad, ID 04292"
age: 76
custID: 11
email: "peggy@gmail.com"
firstName: "Peggy"
gender: "Female"
lastName: "Thorton"
nric: "S4584837H"
phoneNumber: "(+65) 81920299"
__proto__: Object
*/