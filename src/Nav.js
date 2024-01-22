import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './Nav.css';
import { Button, Radio } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
// import { IntersectionObserver } from 'react-intersection-observer';

import axios from 'axios';

function Nav(props) {
  let [count, setCount] = useState(40);

  const [ref, inView] = useInView();
  useEffect(() => {
    // inView가 true 일때만 실행한다.
    if (inView) {
      console.log(inView, '무한 스크롤 요청 🎃');
      setCount(count + 40);
    }
  }, [inView]);

  // const target = useRef();
  // useEffect(() => {
  //   const floor = target.current;
  //   const options = {
  //     threshold: 1.0,
  //   };
  //   const callback = (entries) => {
  //     if (entries[0].isIntersecting) {
  //       console.log('관측되었습니다');
  //       setCount(count + 40);
  //       console.log(count);
  //     }
  //   };
  //   const observer = new IntersectionObserver(callback, options);
  //   console.log(observer);
  //   if (floor) {
  //     observer.observe(floor);
  //   }

  //   return () => {
  //     if (floor) {
  //       observer.unobserve(floor);
  //     }
  //   };
  // }, []);

  /*useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); //clean up
    };
  }, []);

  const handleScroll = () => {
    // 스크롤이 Top에서 50px 이상 내려오면 true값을 useState에 넣어줌
    if (window.scrollY >= 30) {
      setScroll(true);
      console.log(scroll);
    } else {
      // 스크롤이 50px 미만일경우 false를 넣어줌
      setScroll(false);
      console.log(scroll);
    }
  }; */
  // let intersectionObserver = new IntersectionObserver(callback, options);
  // let callback = (entries) => {
  //   entries.forEach((entry) => {
  // Each entry describes an intersection change for one observed
  // target element:
  //   entry.boundingClientRect
  //   entry.intersectionRatio
  //   entry.intersectionRect
  //   entry.isIntersecting
  //   entry.rootBounds
  //   entry.target
  //   entry.time
  //   });
  // };
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

  const lists = props.list.slice(0, count).map((v) => (
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
        <ButtonGroup
          variant='contained'
          aria-label='outlined primary button group'
        >
          <button
            value='Todo'
            onClick={() => {
              const handleSignUp = async () => {
                try {
                  await axios.post('api/TodoItems/status', {
                    id: `${v.id}`,
                    status: 2,
                  });
                } catch (error) {
                  console.log(error);
                }
              };
              handleSignUp();
              props.Updatelists();
            }}
          >
            Todo
          </button>

          <button
            value='Doing'
            onClick={() => {
              const handleSignUp = async () => {
                try {
                  await axios.post('api/TodoItems/status', {
                    id: `${v.id}`,
                    status: 3,
                  });
                } catch (error) {
                  console.log(error);
                }
              };
              handleSignUp();
              props.Updatelists();
            }}
          >
            Doing
          </button>
          <button
            value='Done'
            onClick={() => {
              const handleSignUp = async () => {
                try {
                  await axios.post('api/TodoItems/status', {
                    id: `${v.id}`,
                    status: 4,
                  });
                } catch (error) {
                  console.log(error);
                }
              };
              handleSignUp();
              props.Updatelists();
            }}
          >
            Done
          </button>
        </ButtonGroup>
      </Button>
    </li>
  ));

  return (
    <div className='ComponentBox'>
      <header>
        <h2>{props.title}</h2>
      </header>
      {<div>{lists}</div>}
      <p ref={ref}></p>
    </div>
  );
}

export default Nav;
