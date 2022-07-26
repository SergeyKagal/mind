import React from 'react';
import Addtodo from './Addtodo';
import TodoList from './TodoList';
import { Paper, Typography } from '@mui/material';
import Controls from './Controls';

function App() {
  return (
    <div className="App">
      <Paper
        sx={{ minHeight: 500, width: 0.65, p: 3, mx: 'auto', mt: 4 }}
        elevation={7}
      >
        <Addtodo />
        <Typography variant="h4" sx={{ textAlign: 'center', p: 2 }}>
          Todo list
        </Typography>
        <TodoList />
        <Controls />
      </Paper>
    </div>
  );
}

export default App;
