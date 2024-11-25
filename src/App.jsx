import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import {useState} from "react";




function App() {

  // Create new state variable named todoList with setter setTodoList and default value of an empty Array
  const [todoList, setTodoList] = useState([]);

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
