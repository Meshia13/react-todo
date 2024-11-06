import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";


function App() {
  
  return (
    <div>

      {/* Create a level-one heading that says "Todo List" */}
      <h1>Todo List</h1>

      {/* Below the level-one heading, use the AddTodoForm component */}
      <AddTodoForm />

      {/* Below the level-one heading, use the TodoList component */}
      <TodoList />

      

    </div>

  )

}

export default App
