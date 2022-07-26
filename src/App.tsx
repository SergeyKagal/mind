import React from 'react';
import Addtodo from './components/Addtodo';
import TodoList from './TodoList';
import { Paper, Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Paper
        sx={{ minHeight: 400, width: 0.55, p: 3, mx: 'auto' }}
        elevation={7}
      >
        <Addtodo />
        <Typography variant="h4" sx={{ textAlign: 'center', p: 2 }}>
          Todo list
        </Typography>
        <TodoList />
      </Paper>
    </div>
  );
}

export default App;
