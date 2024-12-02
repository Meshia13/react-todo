import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import {useState, useEffect} from "react";

// Above the App functional component, create a new function named useSemiPersistentState which will be a custom hook
const useSemiPersistentState = () => {

   // Update the default state for todoList to read your "savedTodoList" item from localStorage: Hint: localStorage.getItem method
  // Update your default state to parse the value of the "savedTodoList" item:Hint: JSON.parse method
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("savedTodoList")) || [todoList]);

  // Define a useEffect React hook with todoList as a dependency
  // Inside the side-effect handler function, save the todoList inside localStorage with the key "savedTodoList"
  useEffect(() => {
    // Update your side-effect function to convert todoList to a string before saving in localStorage, Hint: JSON.stringify method
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList]

}



function App() {

  // Update App to use the new custom hook
  // Hint: Copy the useState hook from before, but change useState to the custom hook useSemiPersistentState (no arguments)
  const [todoList, setTodoList] = useSemiPersistentState();

  /* - Declare a new function named addTodo that takes newTodo as a parameter
   -Call the setTodoList state setter and use the spread operator to pass the existing Objects in the 
   todoList Array along with the newTodo Object */
  const addTodo =(newTodo) => {
    setTodoList( [...todoList, newTodo] )
  }

  /* Define a new handler function named removeTodo with parameter id
  -Inside this function, remove the item with the given id from todoList hint: filter or splice methods
  -Call the setTodoList state setter and pass the new or modified Array */ 
  const removeTodo = (id) => {

    const newTodoList = todoList.filter(
      (todoListFiltered) => todoListFiltered.id !== id
    );
    setTodoList(newTodoList);
  
  }


  return (
    // update the JSX to use a Fragment
    <>

      {/* Create a level-one heading that says "Todo List" */}
      <h1>Todo List</h1>

      {/* Below the level-one heading, use the AddTodoForm component */}
      {/* Pass setNewTodo as a callback handler prop named onAddTodo to the AddTodoForm component 
      -Change the value of the onAddTodo prop for AddTodoForm to addTodo*/}
      <AddTodoForm onAddTodo={addTodo} />

      {/* Below the level-one heading, use the TodoList component
      -Pass todoList state as a prop named todoList to the TodoList component 
      -Pass removeTodo as a callback handler prop named onRemoveTodo to the TodoList component*/}
      <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>

    </>

  )

}

export default App
