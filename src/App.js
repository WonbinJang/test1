import { React, createContext, useContext } from 'react';
import Header from './Header';
import TodoLists from './TodoLists';
import { useState, useEffect } from 'react';
import Login from './login';
import './App.css';
import { Link } from 'react-router-dom';
import SideBar from './Sidebar';
import axios from 'axios';
import {
  useRecoilState,
  useSetRecoilState,
  useResetRecoilState,
  useRecoilValue,
} from 'recoil';
import {
  Backlogs,
  Todos,
  Doings,
  Dones,
  userName,
  isDisable,
} from './countState';

export const GetList = async (status) => {
  const response = await axios.get(`/api/TodoItems/${status}`);
  // console.log('마이컨텍스트', value);
  return response.data;
};
export const GetuserName = async (status) => {
  const response = await axios.post('/api/TodoItems/user/login', {
    userName: '',
    Password: '',
  });

  return response.data;
};

// props 계속 내린다
// context API
// 전역 상태 관리 라이브러리

function App() {
  const [backlogs, setBacklogs] = useRecoilState(Backlogs);
  const [todos, setTodos] = useRecoilState(Todos);
  const [doings, setDoings] = useRecoilState(Doings);
  const [dones, setDones] = useRecoilState(Dones);
  const name = useRecoilValue(userName);
  const [Disable, setDisable] = useRecoilState(isDisable);

  // GetuserName();

  useEffect(() => {
    GetList('Backlogs').then((response) => {
      setBacklogs(response);
    });
    GetList('Todo').then((response) => {
      setTodos(response);
    });
    GetList('Doing').then((response) => {
      setDoings(response);
    });
    GetList('Done').then((response) => {
      setDones(response);
    });
    return () => {};
  }, []);

  return (
    <div>
      <Header>
        <Link to='/login'>
          <button>login</button>
        </Link>
      </Header>
      <div>{name}</div>
      <div className='list'>
        <TodoLists title='Backlogs' list={backlogs} />
        <TodoLists title='Todo' list={todos} />
        <TodoLists title='Doing' list={doings} />
        <TodoLists title='Done' list={dones} />
      </div>
      <SideBar>
        <Login userName={name}></Login>
      </SideBar>
    </div>
  );
}

export default App;
