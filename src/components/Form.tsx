import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Todo } from '../types';
import { v4 as uuid } from 'uuid';

interface FormProps {
  addTodo: (todo: Todo) => void;
}

const FormComponent: React.FC<FormProps> = ({ addTodo }) => {
  const [hasError, setHasError] = useState<boolean>(false);
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      todo: { value: string };
    };
    if (target.todo.value) {
        const todo: Todo = {
          id: uuid(),
          title: target.todo.value,
          completed: false,
        };
        addTodo(todo);
    } else {
      setHasError(true);
    }
    target.todo.value = ""
  };
  return (
    <Form className='my_form' onSubmit={handleSubmit}>
      <Form.Control
        type='text'
        placeholder='Enter your todo'
        name='todo'
        className={hasError ? 'invalid' : ''}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (e.target.value) {
            setHasError(false);
          } else {
            setHasError(true);
          }
        }}
      />
      <Button value='outline-primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
};

export default FormComponent;