import Form from './components/Form';
import { useTodos } from './store';
import shallow from 'zustand/shallow';
import { Todo } from './types';
import TodoCard from './components/Todocard';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';

function App() {
  const {
    todos,
    addTodo,
    clearAll,
    completeTodo,
    completedTodos,
    setFilterWord,
    filterWords,
  } = useTodos(
    (state) => ({
      todos: state.todos,
      addTodo: state.addTodo,
      clearAll: state.clearAll,
      completeTodo: state.completeTodo,
      completedTodos: state.completedTodos,
      setFilterWord: state.setFilterWord,
      filterWords: state.filterWords,
    }),
    shallow
  );

  const [filteredTodos,setFilteredTodos] = useState<Todo[]>([]);
  const [filteredCompletedTodos, setFilteredCompletedTodos] = useState<Todo[]>(
    []
  );

  useEffect(()=>{
    if(filterWords.length){

      setFilteredTodos(()=>{
        const newTodos = todos.filter((todo: Todo) =>
          filterWords.every((word) =>
            todo.title.toLowerCase().includes(word.toLowerCase())
          )
        );

        return newTodos;
      })

      setFilteredCompletedTodos(()=>{
        const newTodos = completedTodos.filter((todo: Todo) =>
          filterWords.every((word) =>
            todo.title.toLowerCase().includes(word.toLowerCase())
          )
        );

        return newTodos;
      })

    }else{
      setFilteredTodos(todos);
      setFilteredCompletedTodos(completedTodos);
    }
  },[filterWords,todos,completedTodos])


  return (
    <>
      <Form addTodo={addTodo} />
      <Button variant='danger' className='refresh' onClick={clearAll}>
        Refresh
      </Button>
      <div className='cards'>
        {filteredTodos.map((item: Todo) => (
          <TodoCard
            todo={item}
            key={item.id}
            completeTodo={completeTodo}
            setFilterWord={setFilterWord}
          />
        ))}
      </div>
      {filteredCompletedTodos.length ? <h3>Completed Todos</h3> : null}
      <div className='cards'>
        {filteredCompletedTodos.length
          ? filteredCompletedTodos.map((item: Todo) => (
              <TodoCard
                todo={item}
                key={item.id}
                completeTodo={completeTodo}
                setFilterWord={setFilterWord}
              />
            ))
          : null}
      </div>
    </>
  );
}

export default App;
