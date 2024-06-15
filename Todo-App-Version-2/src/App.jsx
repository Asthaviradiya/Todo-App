import AppName from "/Users/Asus/github-repo/Todo-App/Todo-App-Version-1/src/AppName"
import AddTodo from "/Users/Asus/github-repo/Todo-App/Todo-App-Version-1/src/AddTodo"
import TodoItem1 from "/Users/Asus/github-repo/Todo-App/Todo-App-Version-1/src/TodoItem1"
import TodoItem2 from "./TodoItem2"
import "./App.css"

function App() {
  return <center class="todo-container">

    <AppName></AppName>
    <AddTodo></AddTodo>
    <div className="items-container">
    <TodoItem1></TodoItem1>
    <TodoItem2></TodoItem2>
    </div>
    
  </center>
}

export default App
