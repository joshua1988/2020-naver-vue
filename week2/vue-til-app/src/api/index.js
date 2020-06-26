import axios from "axios";

function registerUser(userInfo) {
  return axios.post("http://localhost:3000/signup", userInfo);
}

export { registerUser };
