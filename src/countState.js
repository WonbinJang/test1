import { atom } from 'recoil';

export const Backlogs = atom({
  key: 'Backlogs',
  default: [],
});

export const Todos = atom({
  key: 'todos',
  default: [],
});

export const Doings = atom({
  key: 'Doings',
  default: [],
});

export const Dones = atom({
  key: 'Dones',
  default: [],
});

export const userName = atom({
  key: 'userName',
  default: '',
});

export const isDisable = atom({
  key: 'isDisable',
  default: true,
});
