import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css"
const TodoItems = ({todoItems}) => {
    return (
        <div className={styles.itemsContainer}>
            {todoItems.map(item => <TodoItem name={item.name} date={item.date}></TodoItem>)}
    </div>
    )
}
export default TodoItems;