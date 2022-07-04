import React, { useEffect, useRef } from 'react';
import { Todo } from '../types';
import reactStringReplace from 'react-string-replace';
import {v4 as uuid} from 'uuid'

interface TodoCardProps {
  todo: Todo;
  completeTodo: (todo: Todo) => void;
  setFilterWord: (filterWord: string) => void;
  filterWords:string[]
}

const TodoCard: React.FC<TodoCardProps> = ({
  todo,
  completeTodo,
  setFilterWord,
  filterWords
}) => {
  const clickHandler = (e: any) => {
    if (e.srcElement.nodeName === 'SPAN') {
      setFilterWord(e.srcElement.id.trim().toLowerCase());
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
          <span
            key={uuid()}
            id={match}
            className={`${filterWords.includes(match.toLowerCase()) ? 'highlight' : ''}`}
          >
            #{match}
          </span>
        ))}
      </p>
    </div>
  );
};

export default TodoCard;
