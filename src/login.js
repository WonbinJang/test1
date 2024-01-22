import React from 'react';
import './login.css';
function Login() {
  return (
    <div className="Box">
      <header>
        <h1>login</h1>
      </header>
      <div>
        <p>ID</p>
        <input type="text"></input>
        <p>PassWord</p>
        <input type="password"></input>
        <button className="loginbtn" type="submit">
          login
        </button>
      </div>
    </div>
  );
}

export default Login;
