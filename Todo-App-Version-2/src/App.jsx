import AppName from "/Users/Asus/github-repo/Todo-App/Todo-App-Version-1/src/AppName"
import AddTodo from "/Users/Asus/github-repo/Todo-App/Todo-App-Version-1/src/AddTodo"

import TodoItems from "./components/TodoItems"
import "./App.css"

function App() {
  const todoItems = [{
    name:'buy milk',
    date: '4-4-2024'
  },
  {
    name:'got to college',
    date: '4-4-2024'
  },
  {
    name:'like here',
    date: 'right now'
  }
]
  return( <center class="todo-container">

    <AppName></AppName>
    <AddTodo></AddTodo>
    <TodoItems todoItems={todoItems}></TodoItems>
    
    
  </center>
  );
}

export default App;
