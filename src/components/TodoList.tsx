import React from 'react';
import { observer } from 'mobx-react-lite';
import { toJS } from 'mobx';
import { List, ListItem, ListItemText, Checkbox } from '@mui/material';
import store from '../store';

export const TodoList = () => {
  return (
    <>
      <List sx={{ minHeight: 300 }}>
        {toJS(store.showTodos).map((item) => (
          <ListItem
            key={item.id}
            divider={true}
            button={true}
            onClick={() => store.toggleTodoItem(item.id)}
            sx={{ width: 0.8, mx: 'auto' }}
          >
            <Checkbox edge="start" checked={item.isDone} />
            <ListItemText
              primary={item.text}
              className={item.isDone ? 'isDone' : undefined}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default observer(TodoList);
