import React, { useEffect } from 'react';
import './login.css';
import axios from 'axios';
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from 'recoil';
import { isDisable, userName } from './countState';

function Login(props) {
  const [name, setName] = useRecoilState(userName);
  const setRecoilName = useSetRecoilState(userName);
  const [Disable, setDisable] = useRecoilState(isDisable);
  const reSetName = useResetRecoilState(userName);
  const handleSignUp = async () => {
    const response = await axios.post('/api/TodoItems/user/login', {
      userName: 'Bruno Mars',
      Password: '24K Magic',
    });
    console.log(response.data);
    await reSetName();
    await setName(response.data);
    await setDisable(false);
  };

  // export default function generateUUID() {
  //   return ‘xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx’.replace(/[xy]/g, function(c) {
  //     var r = Math.random() * 16 | 0,
  //         v = c == ‘x’ ? r : (r & 0x3 | 0x8);
  //     return v.toString(16);
  //   });
  // }
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
          onClick={() => {
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
