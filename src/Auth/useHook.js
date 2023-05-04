import { useEffect, useState } from "react";
import { tryLogin } from "../api/login-client";

export const useHook = () => {
  const [isLogged, setIsLogged] = useState(false); // destructuring
  const attemptLogin = (email, password) => {
    tryLogin(email, password)
      .then(() => {
        setIsLogged(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return {
    isLogged,
    attemptLogin,
  };
};
