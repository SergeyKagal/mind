import React, { memo, useState } from 'react';
import { TextField, Stack, Button } from '@mui/material';
import store from '../store';

const Addtodo = () => {
  const [text, setText] = useState('');

  const addTodoHandler = () => {
    if (text.length) {
      store.addTodo(text);
      setText('');
    }
  };
  console.log('render');

  return (
    <>
      <Stack direction="row" spacing={1}>
        <TextField
          sx={{ width: 350 }}
          id="standard-basic"
          label="What needs to be done ?"
          variant="outlined"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <Button
          variant="contained"
          sx={{ width: 110, height: 55 }}
          onClick={addTodoHandler}
        >
          Add Todo
        </Button>
      </Stack>
    </>
  );
};

export default memo(Addtodo);
