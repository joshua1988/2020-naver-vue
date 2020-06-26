/* eslint-disable prettier/prettier */
import axios from "axios";

// var localUrl = "http://localhost:3000/";
// var testUrl = "http://localhost:4000/";

// process.env.VUE_APP_URL
// process.env.NODE_ENV; // development, production, test

// if (process.env.NODE_ENV !== 'development') {
  
// }

var instance = axios.create({
  baseURL: "http://localhost:3000/",
  timeout: 5000
});

var initInstance = setInterceptors(instance);

var notes = axios.create({
  baseURL: "http://localhost:3000/posts/",
  timeout: 5000,
  // headers: {
  //   Authorization: 
  // }
});

function registerUser(userInfo) {
  return instance.post("signup", userInfo);
}

function loginUser(loginInfo) {
  return instance.post("login", loginInfo);
}

export { registerUser, loginUser, notes };
