import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import ButtonGroup from '@mui/material/ButtonGroup';
import { getList, changeStatus, backlogList } from './App';
import { useEffect } from 'react';

// const getList = async (status) => {
//   let list = [];
//   await axios.get(`/api/TodoItems/${status}`).then((response) => {
//     list.push(response.data);
//   });
//   return list;
// };
const card = (title, description, createdAt, key, list, setList, arrayname) => {
  return (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          userName
        </Typography>
        <Typography variant='h5' component='div'>
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          {createdAt}
        </Typography>
        <Typography style={{ wordBreak: 'break-all' }} color='text.secondary'>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <ButtonGroup
          variant='outlined'
          size='small'
          aria-label='outlined primary button group'
        >
          <Button
            value='Todo'
            onClick={() => {
              // 새로운걸 받아왔는데
              getList('Todo').then((todos) => {
                backlogList = todos;
                // 뭘해야 하는가?
                // 상태는 저기 위에 있음.
              });

              //   getList('Todo');
              //   getList({ arrayname });
            }}
          >
            Todo
          </Button>

          <Button
            value='Doing'
            onClick={() => {
              changeStatus(key, 3);
              //   getList('Doing');
              //   getList({ arrayname });
            }}
          >
            Doing
          </Button>
          <Button
            value='Done'
            onClick={() => {
              changeStatus(key, 4);
              //   getList('Done');
              //   getList({ arrayname });
            }}
          >
            Done
          </Button>
        </ButtonGroup>
      </CardActions>
    </React.Fragment>
  );
};

export default function OutlinedCard(props) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant='outlined'>
        {card(
          props.title,
          props.description,
          props.createdAt,
          props.id,
          props.list,
          props.setList,
          props.arrayname
        )}
      </Card>
    </Box>
  );
}
