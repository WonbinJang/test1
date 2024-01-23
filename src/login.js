import React, { useEffect } from 'react';
import './login.css';
import axios from 'axios';
function Login(props) {
  return (
    <div className='Box'>
      <header>
        <h1>login</h1>
      </header>
      <div>
        <p>ID</p>
        <input type='text'></input>
        <p>PassWord</p>
        <input type='password'></input>
        <button
          className='loginbtn'
          type='submit'
          onClick={() => {
            const handleSignUp = async () => {
              try {
                await axios
                  .post('api/TodoItems/user/login', {
                    userName: 'Bruno Mars',
                    Password: '24K Magic',
                  })
                  .then((response) => {
                    if (response.Ok) {
                      console.log(response.data);
                      props.userName = response.data;
                    }
                  });
              } catch (error) {
                console.log(error);
              }
            };
            handleSignUp();
          }}
        >
          login
        </button>
      </div>
    </div>
  );
}

export default Login;
