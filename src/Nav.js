import React, { useRef, useEffect, useState } from 'react';
import './Nav.css';
import { Button, Radio } from '@mui/material';
import { IntersectionObserver } from 'react-intersection-observer';
import { useInView } from 'react-intersection-observer';
import axios from 'axios';

function Nav(props) {
  const floorRef = useRef < HTMLDivElement > null;
  const Num = useRef(0);
  const [count, setCount] = useState(Num);
  let options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 1.0,
  };
  // let intersectionObserver = new IntersectionObserver(callback, options);
  let callback = (entries) => {
    entries.forEach((entry) => {
      // Each entry describes an intersection change for one observed
      // target element:
      //   entry.boundingClientRect
      //   entry.intersectionRatio
      //   entry.intersectionRect
      //   entry.isIntersecting
      //   entry.rootBounds
      //   entry.target
      //   entry.time
    });
  };
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const target = entries[0];
  //     console.log(target);
  //     const hasMoreData = count > Num.current + 1 * 20;
  //     if (target.isIntersecting && hasMoreData) {
  //       Num.current += 1;
  //     }
  //   });
  //   const floor = floorRef.current;

  //   if (floor) {
  //     observer.observe(floor);
  //   }

  //   return () => {
  //     if (floor) {
  //       observer.unobserve(floor);
  //     }
  //   };
  // }, [floorRef, count]);

  const lists = props.list.slice(0, 40).map((v) => (
    <li key={v.id}>
      <Button
        sx={{ textTransform: 'unset' }}
        variant='text'
        key={v.id}
        onClick={() => {
          axios
            .get(`api/TodoItems/${v.id}`)
            .then((response) => console.log(response.data));
        }}
      >
        {v.title}
        <button
          variant='text'
          key={v.id}
          onClick={() => {
            axios.post(`api/TodoItems/statusTodo/${v.id}`).then((response) => {
              console.log(response);
            });
          }}
        >
          Todo
        </button>

        <button
          variant='text'
          value='Doing'
          onClick={() => {
            axios.post(`api/TodoItems/statusDoing/${v.id}`).then((response) => {
              console.log(response);
            });
          }}
        >
          Doing
        </button>
        <button
          variant='text'
          value='Done'
          onClick={() => {
            axios.post(`api/TodoItems/statusDone/${v.id}`).then((response) => {
              console.log(response);
            });
          }}
        >
          Done
        </button>
      </Button>
    </li>
  ));
  return (
    <div className='ComponentBox'>
      <header>
        <h2>{props.title}</h2>
      </header>
      {<div>{lists}</div>}
    </div>
  );
}

export default Nav;
