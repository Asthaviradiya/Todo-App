import AppName from "/Users/Asus/github-repo/Todo-App/Todo-App-Version-1/src/AppName"
import AddTodo from "/Users/Asus/github-repo/Todo-App/Todo-App-Version-1/src/AddTodo"
import TodoItem from "./components/TodoItem"
import "./App.css"

function App() {
  const todoItems = [{
    name:'buy milk',
    date: '4-4-2024'
  },
  {
    name:'got to college',
    date: '4-4-2024'
  }
]
  return( <center class="todo-container">

    <AppName></AppName>
    <AddTodo></AddTodo>
    <div className="items-container">
      <TodoItem name="buy milk" date="4/10/2024"></TodoItem>
      <TodoItem name="go to college" date="4/10/2024"></TodoItem>
    </div>
    
  </center>
  );
}

export default App;
