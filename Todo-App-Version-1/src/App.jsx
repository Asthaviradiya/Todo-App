import AppName from "/Users/Asus/github-repo/Todo-App/Todo-App-Version-1/src/AppName"
import AddTodo from "/Users/Asus/github-repo/Todo-App/Todo-App-Version-1/src/AddTodo"
import TodoItem1 from "/Users/Asus/github-repo/Todo-App/Todo-App-Version-1/src/TodoItem1"
function App() {
  return <center class="todo-container">

    <AppName></AppName>
    <AddTodo></AddTodo>
    <TodoItem1></TodoItem1>
    <div class="container text-center">
      <div class="row">
        <div class="col-6">
          Go To College
        </div>
        <div class="col-4">
          4/10/2023
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">delete</button>
          </div>
      </div>
    </div>
  </center>
}

export default App
