import React from 'react';
import './login.css';
import axios from 'axios';
function Login() {
  return (
    <div className='Box'>
      <header>
        <h1>login</h1>
      </header>
      <div>
        <form>
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
                    .then((response) => console.log(response));
                } catch (error) {
                  console.log(error);
                }
              };
              handleSignUp();
            }}
          >
            login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
