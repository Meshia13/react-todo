import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import {useState} from "react";


function App() {
  
  const [newTodo, setNewTodo] = useState("");

  return (
    <div>

      {/* Create a level-one heading that says "Todo List" */}
      <h1>Todo List</h1>

      {/* Below the level-one heading, use the AddTodoForm component */}
      <AddTodoForm onAddTodo={setNewTodo} />

      <p>
        {newTodo}
      </p>

      {/* Below the level-one heading, use the TodoList component */}
      <TodoList />

      

    </div>

  )

}

export default App
