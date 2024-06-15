import TodoItem from "./TodoItem";
const TodoItems = ({todoItems}) => {
    return (
        <div className="items-container">
            {todoItems.map(item => <TodoItem name={item.name} date={item.date}></TodoItem>)}
    </div>
    )
}
export default TodoItems;