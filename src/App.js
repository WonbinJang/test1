import { React, createContext, useContext } from 'react';
import Header from './Header';
import TodoLists from './TodoLists';
import { useState, useEffect } from 'react';
import Login from './login';
import './App.css';
import { Link } from 'react-router-dom';
import SideBar from './Sidebar';
import axios from 'axios';
import atom from 'recoil';
import { useRecoilState, useSetRecoilState, useResetRecoilState } from 'recoil';

export const getList = async (status) => {
  let value = [];

  await axios.get(`/api/TodoItems/${status}`).then((response) => {
    value = response.data;
  });
  // console.log('마이컨텍스트', value);
  return value;
};

export const changeStatus = async (key, status) => {
  try {
    await axios.post('api/TodoItems/status', {
      id: `${key}`,
      status: `${status}`,
    });
  } catch (error) {
    console.log(error);
  }
};

// props 계속 내린다
// context API
// 전역 상태 관리 라이브러리

function App() {
  const [backlogs, setBacklogs] = useState([]);
  const [todos, setTodos] = useState([]);
  const [doings, setDoings] = useState([]);
  const [dones, setDones] = useState([]);
  const [userName, setUserName] = useState([]);
  // console.log('app.js', getList('Backlogs'));

  useEffect(() => {
    getList('Backlogs').then((response) => {
      setBacklogs(response[0]);
    });
    getList('Todo').then((response) => {
      setTodos(response[0]);
    });
    getList('Doing').then((response) => {
      setDoings(response[0]);
    });
    getList('Done').then((response) => {
      setDones(response[0]);
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
      <div>{userName}</div>
      <div className='list'>
        <TodoLists
          title='backlogs'
          list={backlogs}
          setList={setBacklogs}
          getList={() => {
            getList('Backlogs').then((todos) => {
              setBacklogs(todos);
            });
          }}
        />
        <TodoLists
          title='Todo'
          list={todos}
          setList={setTodos}
          getList={() => getList}
        ></TodoLists>
        <TodoLists
          title='In Progress'
          list={doings}
          setList={setDoings}
          getList={getList}
        ></TodoLists>
        <TodoLists
          title='Done'
          list={dones}
          setList={setDones}
          getList={() => getList}
        ></TodoLists>
      </div>
      <SideBar>
        <Login userName={userName} setUserName={setUserName}></Login>
      </SideBar>
    </div>
  );
}

export default App;
