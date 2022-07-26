import React, { memo, useState } from 'react';
import { TextField, Stack, Button } from '@mui/material';
import store from '../store';

const Addtodo = () => {
  const [text, setText] = useState('');

  const addTodoHandler = (text: string) => {
    if (text.length) {
      store.addTodo(text);
      setText('');
    }
  };

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      text: { value: string };
    };
    addTodoHandler(target.text.value);
  };

  return (
    <>
      <Stack direction="row" spacing={1}>
        <form onSubmit={submitHandler}>
          <TextField
            name="text"
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
            onClick={() => addTodoHandler(text)}
          >
            Add Todo
          </Button>
        </form>
      </Stack>
    </>
  );
};

export default memo(Addtodo);
