import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from '../components/App';

describe('Todos tests', () => {
  test('render App', () => {
    render(<App />);
    expect(
      screen.getByLabelText('What needs to be done ?')
    ).toBeInTheDocument();
    expect(screen.getByText(/add todo/i)).toBeInTheDocument();
    expect(screen.getByText('Todo list')).toBeInTheDocument();
    expect(screen.getByText('Todo list is empty')).toBeInTheDocument();
    expect(screen.getByTestId(/all/i)).toBeInTheDocument();
    expect(screen.getByTestId(/active/i)).toBeInTheDocument();
    expect(screen.getByTestId(/completed/i)).toBeInTheDocument();
    expect(screen.getByText(/clear completed/i)).toBeInTheDocument();
  });
  test('push todo item', () => {
    render(<App />);
    expect(screen.getByText('Todo list is empty')).toBeInTheDocument();
    const todoInput = screen.getByLabelText('What needs to be done ?');
    const addButton = screen.getByText(/add todo/i);
    userEvent.type(todoInput, 'write test');
    userEvent.click(addButton);
    expect(todoInput).toHaveDisplayValue('');
    expect(screen.queryByText('Todo list is empty')).not.toBeInTheDocument();
    expect(screen.getByText('1 item left')).toBeInTheDocument();
  });
  test('push 20 todo items', () => {
    render(<App />);
    const todoInput = screen.getByLabelText('What needs to be done ?');
    const addButton = screen.getByText(/add todo/i);
    expect(screen.getByText('1 item left')).toBeInTheDocument();

    for (let i = 0; i < 20; i++) {
      userEvent.type(todoInput, `write test`);
      userEvent.click(addButton);
    }

    expect(screen.getByText('21 items left')).toBeInTheDocument();
  });
  test('complete all todos', () => {
    render(<App />);
    expect(screen.getByText('21 items left')).toBeInTheDocument();
    const buttons = screen.getAllByText('write test');
    buttons.forEach((todoItem) => {
      userEvent.click(todoItem);
    });
    expect(screen.getByText('All items is done')).toBeInTheDocument();
  });
  test('clear completed', () => {
    render(<App />);
    expect(screen.getByText('All items is done')).toBeInTheDocument();
    const clearButton = screen.getByText(/clear completed/i);
    userEvent.click(clearButton);
    expect(screen.getByText('Todo list is empty')).toBeInTheDocument();
  });
});
