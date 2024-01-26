import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import ButtonGroup from '@mui/material/ButtonGroup';
import { GetList } from './App';
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from 'recoil';
import {
  Backlogs,
  Doings,
  Dones,
  Todos,
  isDisable,
  userName,
} from './countState';

const CardCon = (title, description, User, createdAt, key, arrayname) => {
  const setRecoilBacklogs = useSetRecoilState(Backlogs);
  const reSetBacklogs = useResetRecoilState(Backlogs);
  const setRecoilTodos = useSetRecoilState(Todos);
  const reSetTodos = useResetRecoilState(Todos);
  const setRecoilDoings = useSetRecoilState(Doings);
  const reSetDoings = useResetRecoilState(Doings);
  const setRecoilDones = useSetRecoilState(Dones);
  const reSetDones = useResetRecoilState(Dones);
  const [name, setName] = useRecoilState(userName);
  const [Disable, setDisable] = useRecoilState(isDisable);

  const changeStatus = async (key, status) => {
    try {
      await axios.post('api/TodoItems/status', {
        id: `${key}`,
        status: `${status}`,
        userName: `${name}`,
      });
    } catch (error) {
      console.log(error);
    }
  };
  // const userName = useRecoilValue(userName);
  //Warning: Each child in a list should have a unique "key" prop.
  const UpdateList = (listName) => {
    if (listName === 'Todo') {
      GetList('Todo').then((response) => {
        reSetTodos();
        setRecoilTodos(response);
      });
    } else if (listName === 'Doing') {
      GetList('Doing').then((response) => {
        reSetDoings();
        setRecoilDoings(response);
      });
    } else if (listName === 'Done') {
      GetList('Done').then((response) => {
        reSetDones();
        setRecoilDones(response);
      });
    } else if (listName === 'Backlogs') {
      GetList('Backlogs').then((response) => {
        reSetBacklogs();
        setRecoilBacklogs(response);
      });
    }
  };
  return (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          {User}
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
            disabled={Disable}
            value='Todo'
            onClick={async () => {
              await changeStatus(key, 2);
              await UpdateList('Todo');
              await UpdateList(arrayname);
            }}
          >
            Todo
          </Button>

          <Button
            disabled={Disable}
            value='Doing'
            onClick={async () => {
              await changeStatus(key, 3);
              await UpdateList('Doing');
              await UpdateList(arrayname);
            }}
          >
            Doing
          </Button>
          <Button
            disabled={Disable}
            value='Done'
            onClick={async () => {
              await changeStatus(key, 4);
              await UpdateList('Done');
              await UpdateList(arrayname);
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
        {CardCon(
          props.title,
          props.description,
          props.userName,
          props.createdAt,
          props.id,
          props.arrayname
        )}
      </Card>
    </Box>
  );
}
