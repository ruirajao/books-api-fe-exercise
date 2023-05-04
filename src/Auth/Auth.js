import axios from "axios";
import { useRef, useState } from "react";
// import { useHistory } from "react-router-dom";

import "./Auth.css";
import { useHook } from "./useHook";

// function Auth() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [username, setUsername] = useState('');
//   const [errorMessage, setErrorMessage] = useState("");
//   const ref = useRef(null);

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handleRegisterSubmit = async (event) => {
//     console.log(ref.current.value);
//     event.preventDefault();

//     try {
//       const response = await axios.post('http://5.22.217.225:8081/api/v1/auth/register', {
//         email,
//         password,
//         username,
//       });

//       console.log(response.data);
//     } catch (error) {
//     setErrorMessage(error.response.data.message);
//     }
//   };

//   const handleLoginSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await axios.post('http://5.22.217.225:8081/api/v1/auth/login', {
//         email,
//         password,
//       });
//       console.log(response.data);

//     } catch (error) {
//     setErrorMessage(error.response.data.message);
//     }
//   };

//   return (
//     <div className="register-div">
//       <div className="input-group">
//         <span>Email:</span>
//         <input type="email"  ref={ref} id="email" placeholder="Enter your email" />
//       </div>
//       <div className="input-group">
//         <span>Password:</span>
//         <input type="password" value={password} onChange={handlePasswordChange} id="password" placeholder="Enter your password" />
//       </div>
//       <div className="input-group">
//         <span>Username:</span>
//         <input type="text" value={username} onChange={handleUsernameChange} id="username" placeholder="Enter your username" />
//       </div>
//       <button type="submit" onClick={handleRegisterSubmit}>Register</button>
//       <button type="submit" onClick={handleLoginSubmit}>Login</button>
//       {errorMessage && <p className="error-message">{errorMessage}</p>}
//     </div>
//   );
// }

// export default Auth;

function Auth() {
  const { isLogged, attemptLogin } = useHook();
  return !isLogged ? (
    <button onClick={() => attemptLogin("john@gmail.com", "doe")}>
      try login
    </button>
  ) : (
    <div>is logged</div>
  );
}

export default Auth;
