import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './TodoLists.css';
import Box from '@mui/material/Box';
import Card from './Card';

function TodoLists(props) {
  let [count, setCount] = useState(0);

  const [ref, inView] = useInView();
  useEffect(() => {
    // inView가 true 일때만 실행한다.
    if (inView) {
      console.log(inView, '무한 스크롤 요청 🎃');
      setCount(count + 10);
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

  return (
    <div className='ComponentBox'>
      <header>
        <h2>{props.title}</h2>
      </header>
      {
        <div style={{ gap: '12px', display: 'flex', flexDirection: 'column' }}>
          {props.list?.slice(0, count).map((v) => (
            <Box key={v.id} sx={{ maxWidth: 248 }}>
              <Card
                title={v.title}
                userName={v.userName}
                arrayname={props.title}
                description={v.description}
                createdAt={v.createdAt}
                list={props.list}
                setList={props.setList}
                variant='outlined'
                key={v.id}
                id={v.id}
              />
            </Box>
          ))}
        </div>
      }
      <p ref={ref}></p>
    </div>
  );
  // const lists = props.list?.slice(0, count).map((v) => (
  //   <Box sx={{ maxWidth: 275, whiteSpace: 'pre-wrap' }}>
  //     <Card
  //       title={v.title}
  //       arrayname={props.title}
  //       description={v.description}
  //       createdAt={v.createdAt}
  //       list={props.list}
  //       setList={props.setList}
  //       variant='outlined'
  //       key={v.id}
  //       id={v.id}
  //       getList={() => props.getList}
  //     />
  //     <space></space>
  //   </Box>
  // ));

  // return (
  //   <div className='ComponentBox'>
  //     <header>
  //       <h2>{props.title}</h2>
  //     </header>
  //     {
  //       <div style={{ gap: '12px', display: 'flex', flexDirection: 'column' }}>
  //         {lists}
  //       </div>
  //     }
  //     <p ref={ref}></p>
  //   </div>
  // );
}

export default TodoLists;
