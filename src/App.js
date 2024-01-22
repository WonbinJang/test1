import React from 'react';
import Header from './Header';
import Nav from './Nav';
import { useState, useEffect, useRef } from 'react';
import Login from './login';
import './App.css';
import { Link } from 'react-router-dom';
import SideBar from './Sidebar';
import axios from 'axios';

function App() {
  const [backlogs, setBacklogs] = useState([]);
  const [todos, setTodos] = useState([]);
  const [doings, setDoings] = useState([]);
  const [dones, setDones] = useState([]);

  useEffect(() => {
    axios.get('/api/TodoItems/Backlogs').then((response) => {
      try {
        const data = response.data;

        setBacklogs(data);
      } catch (error) {
        console.log(error);
      }
    });
    axios.get('/api/TodoItems/Todo').then((response) => {
      try {
        const data = response.data;

        setTodos(data);
      } catch (error) {
        console.log(error);
      }
    });
    axios.get('/api/TodoItems/Doing').then((response) => {
      try {
        const data = response.data;

        setDoings(data);
      } catch (error) {
        console.log(error);
      }
    });
    axios
      .get('/api/TodoItems/Done')
      .then((response) => {
        try {
          const data = response.data;

          setDones(data);
        } catch (error) {
          console.log(error);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  function Updatelists() {
    axios.get('/api/TodoItems/Backlogs').then((response) => {
      try {
        const data = response.data;

        setBacklogs(data);
      } catch (error) {
        console.log(error);
      }
    });
    axios.get('/api/TodoItems/Todo').then((response) => {
      try {
        const data = response.data;

        setTodos(data);
      } catch (error) {
        console.log(error);
      }
    });
    axios.get('/api/TodoItems/Doing').then((response) => {
      try {
        const data = response.data;

        setDoings(data);
      } catch (error) {
        console.log(error);
      }
    });
    axios
      .get('/api/TodoItems/Done')
      .then((response) => {
        try {
          const data = response.data;

          setDones(data);
        } catch (error) {
          console.log(error);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const target = useRef(null);
  //status: Backlog, Todo, Doing, Dones);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("/api/TodoItems/all");

  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }

  //       const data = await response.json();
  //       setTask(data);
  //     } catch (error) {
  //       console.error("Error fetching or parsing data:", error);
  //     }
  //   };
  //   try {
  //     fetchData();
  //     console.log(task);
  //   } catch (error) {
  //     console.error("Error fetching or parsing data:", error);
  //   }
  // }, []);
  // useEffect(() => {
  //   const backlog = task.filter((newVal) => {
  //     return newVal.status === 1;
  //   });
  //   setBacklogs(backlog);
  //   const todo = task.filter((newVal) => {
  //     return newVal.status === 2;
  //   });
  //   setTodos(todo);
  //   const doing = task.filter((newVal) => {
  //     return newVal.status === 3;
  //   });
  //   setDoings(doing);
  //   const done = task.filter((newVal) => newVal.status === 4);
  //   setDones(done);
  // }, [task]);

  return (
    <div>
      <Header userName='userName'>
        <Link to='/login'>
          <button>login</button>
        </Link>
      </Header>
      <div className='list'>
        <Nav
          title='backlogs'
          list={backlogs}
          setList={setBacklogs}
          Updatelists={Updatelists}
        />
        <Nav
          title='Todo'
          list={todos}
          setList={setTodos}
          Updatelists={Updatelists}
        ></Nav>
        <Nav
          title='In Progress'
          list={doings}
          setList={setDoings}
          Updatelists={Updatelists}
        ></Nav>
        <Nav
          title='Done'
          list={dones}
          setList={setDones}
          Updatelists={Updatelists}
        ></Nav>
      </div>
      <SideBar>
        <Login></Login>
      </SideBar>
    </div>
  );
}

export default App;
