import React, {useState, useEffect} from "react";
import './App.css';

//IMPORT COMPONENTS TIME
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //STATE CONSTANTS
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //USE EFFECT
  useEffect(() => {
    filterHandler();
  }, [todos, status]);


  //FUNCTIONS AND EVENTS
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
      break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  return (
    <div className="App">
     <header>
      <h1>ToDo List</h1>
     </header>
     <Form 
      inputText={inputText} 
      todos={todos} 
      setTodos={setTodos} 
      setInputText={setInputText} 
      setStatus={setStatus}
    />
     <TodoList
     setTodos = {setTodos}
     todos ={todos}
     />
    </div>
  );
}

export default App;
