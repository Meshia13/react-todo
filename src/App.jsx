import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import {useState} from "react";


function App() {
  /* Inside the App functional component, above the return statement, create a new state 
   variable named newTodo with update function named setNewTodo*/
  const [newTodo, setNewTodo] = useState("");

  return (
    <div>

      {/* Create a level-one heading that says "Todo List" */}
      <h1>Todo List</h1>

      {/* Below the level-one heading, use the AddTodoForm component */}
      {/* Pass setNewTodo as a callback handler prop named onAddTodo to the AddTodoForm component */}
      <AddTodoForm onAddTodo={setNewTodo} />

      {/* Below the <AddTodoForm /> component, add a paragraph element that displays the value of newTodo variable */}
      <p>
        {newTodo}
      </p>

      {/* Below the level-one heading, use the TodoList component */}
      <TodoList />

      

    </div>

  )

}

export default App
