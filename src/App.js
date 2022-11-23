import { useState, useCallback, useEffect } from "react";
import "./App.css";
import TodoCard from "./TodoCard";
// TODO: answer here

const App = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTodoFromAPI = useCallback(async () => {
    try {
      const response = await (await fetch('https://jsonplaceholder.typicode.com/todos')).json();
      setTodos(response);
      setLoading(false);
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    getTodoFromAPI();
  }, []);

  const handlePreviewTodoId = (todo_id) => {
    alert(`todo dengan id ${todo_id} telah di clicked`)
  }

  if(loading){
    return <h1 style={{textAlign:'center'}}>**Loading...**</h1>
  }

  // TODO: answer here
  return (
    <div className="App">
      <div className="container">
        <h1>Todo List</h1>
        {todos.map((todo,idx) => ( 
          <TodoCard 
            todo={todo} 
            key={idx} 
            onClick={() => handlePreviewTodoId(todo?.id)} />
        ))}
      </div>
    </div>
  )
  
};

export default App;