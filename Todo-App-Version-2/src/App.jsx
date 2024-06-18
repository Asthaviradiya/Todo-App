import AppName from "/Users/Asus/github-repo/Todo-App/Todo-App-Version-1/src/AppName"
import AddTodo from "/Users/Asus/github-repo/Todo-App/Todo-App-Version-1/src/AddTodo"

import TodoItems from "./components/TodoItems"
import "./App.css"
import { useState } from "react"

function App() {
  const initialTodoItems = [{
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
const [todoItems, setTodoItems] = useState(initialTodoItems);
const handleNewItem = (itemName, itemDueDate) => {
    console.log(`new item added ${itemName} date:${itemDueDate}`)
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
}
const handleDeleteItem = (todoItemName) => {
  const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
  setTodoItems(newTodoItems);
};
  return( <center class="todo-container">

    <AppName></AppName>
    <AddTodo onNewItem={handleNewItem}></AddTodo>
    <TodoItems todoItems={initialTodoItems}></TodoItems>
    
    
  </center>
  );
}

export default App;
