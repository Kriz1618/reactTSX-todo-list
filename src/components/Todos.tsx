import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../store/todos-context";
import styles from './Todos.module.css'

const Todos: React.FC = (props) => {
  const todoCtx = useContext(TodoContext);
  return (
    <ul className={styles.todos}>
      {todoCtx.items.map(todo =>
        <TodoItem key={todo.id} text={todo.text} onRemoveTodo={todoCtx.removeTodo.bind(null, todo.id)} />
      )}
    </ul>
  )
}

export default Todos;
