import React from 'react';
import { observer } from 'mobx-react-lite';

import {
  Stack,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  Button,
} from '@mui/material';
import store from '../store';

const Controls = () => {
  const toggleHandler = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    store.setAlignment(event, newAlignment);
  };
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={3}
      >
        <Typography component="div" sx={{ flexGrow: 1 }}>
          {store.itemsLeftCounter}
        </Typography>

        <ToggleButtonGroup
          onChange={toggleHandler}
          value={store.controlButtonAlignment}
          exclusive
        >
          {store.listModeArray.map((item) => (
            <ToggleButton key={item.id} value={item.label}>
              {item.label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
        <Button
          onClick={() => {
            store.clearTodos();
          }}
        >
          Clear completed
        </Button>
      </Stack>
    </>
  );
};

export default observer(Controls);
