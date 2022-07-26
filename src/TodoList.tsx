import React from 'react';
import { observer } from 'mobx-react-lite';
import { List, ListItem, Divider, ListItemText, Checkbox } from '@mui/material';
import store from './store';
export const TodoList = () => {
  return (
    <>
      <List>
        {store.todos.map((item) => (
          <ListItem
            key={item.id}
            divider={true}
            button={true}
            onClick={() => store.toggleTodoItem(item.id)}
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
