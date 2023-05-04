import axios from "axios";

export const tryLogin = (email, password) =>
  axios.post("http://5.22.217.225:8081/api/v1/auth/login", {
    email,
    password,
  });
