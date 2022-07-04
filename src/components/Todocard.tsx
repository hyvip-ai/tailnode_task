import React, { useEffect, useRef } from 'react';
import { Todo } from '../types';
import reactStringReplace from 'react-string-replace';
import {v4 as uuid} from 'uuid'

interface TodoCardProps {
  todo: Todo;
  completeTodo: (todo: Todo) => void;
  setFilterWord: (filterWord: string) => void;
}

const TodoCard: React.FC<TodoCardProps> = ({
  todo,
  completeTodo,
  setFilterWord,
}) => {
  const clickHandler = (e: any) => {
    if (e.srcElement.nodeName === 'SPAN') {
      setFilterWord(e.srcElement.className.toLowerCase());
    } else {
      if (!todo.completed) {
        completeTodo(todo);
      } else {
        alert('Todos is already completed');
      }
    }
  };
  const cardRef = useRef(null);
  useEffect(() => {
    let localRef: HTMLElement;
    localRef = cardRef.current!;
    (cardRef.current! as HTMLElement).addEventListener('click', clickHandler);
    return () => {
      localRef.removeEventListener('click', clickHandler);
    };
  }, []);
  return (
    <div className='card' ref={cardRef}>
      <p>
        {reactStringReplace(todo.title, /#(\w+)/g, (match) => (
          <span key={uuid()} className={`${match}`}>
            #{match}
          </span>
        ))}
      </p>
    </div>
  );
};

export default TodoCard;
