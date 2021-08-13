import { useRef, useContext } from "react";
import { TodoContext } from "../store/todos-context";
import styles from './NewTodo.module.css';

const NewTodo: React.FC = (props) => {
  const todoCtx = useContext(TodoContext);

  const todoTextRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextRef.current!.value;

    if (!enteredText.trim()) {
      return;
    }

    todoCtx.addTodo(enteredText);
  }

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="test" ref={todoTextRef} />
      <button>Add Todo</button>
    </form>
  )
}

export default NewTodo
