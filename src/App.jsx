import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import {useState, useEffect} from "react";




function App() {

  // Create new state variable named todoList with setter setTodoList and default value of an empty Array
  // Update the default state for todoList to read your "savedTodoList" item from localStorage: Hint: localStorage.getItem method
  // Update your default state to parse the value of the "savedTodoList" item:Hint: JSON.parse method
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("savedTodoList")) || [todoList]);

  // Define a useEffect React hook with todoList as a dependency
  // Inside the side-effect handler function, save the todoList inside localStorage with the key "savedTodoList"
  useEffect(() => {
    // Update your side-effect function to convert todoList to a string before saving in localStorage, Hint: JSON.stringify method
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  /* - Declare a new function named addTodo that takes newTodo as a parameter
   -Call the setTodoList state setter and use the spread operator to pass the existing Objects in the 
   todoList Array along with the newTodo Object */
  const addTodo =(newTodo) => {
    setTodoList( [...todoList, newTodo] )
  }


  return (
    <div>

      {/* Create a level-one heading that says "Todo List" */}
      <h1>Todo List</h1>

      {/* Below the level-one heading, use the AddTodoForm component */}
      {/* Pass setNewTodo as a callback handler prop named onAddTodo to the AddTodoForm component 
      -Change the value of the onAddTodo prop for AddTodoForm to addTodo*/}
      <AddTodoForm onAddTodo={addTodo} />

      {/* Below the level-one heading, use the TodoList component
      -Pass todoList state as a prop named todoList to the TodoList component */}
      <TodoList todoList={todoList}/>

    </div>

  )

}

export default App
