import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import {useState, useEffect} from "react";

function App() {


  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  /* define a useEffect React hook with an empty dependency list
  Inside the side-effect handler function, define a new Promise and pass in a callback function with parameters resolve and reject
  inside the callback function declare a timeout; callback: function with no parameters delay time: 2000 milliseconds (2 seconds)  */
  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(
        () => {
          /* call the parameter resolve which is a callback function for when the Promise is successful and pass it an as Object with property data as a nested empty Object
          Inside the data object, add a property todoList and set it's value to the initial/default list state (copy from useState hook)
           Update the default state for todoList to be an empty Array */
          const savedTodoList = JSON.parse(localStorage.getItem("savedTodoList")) || [];
          resolve({data : {todoList: savedTodoList}})
        }, 2000)
    })
    /* Chain a then method to your Promise constructor and pass it a function with parameter result
    Inside the function, use your state setter to update the list and pass the todoList from your result object */
    .then(result => {
      setTodoList(result.data.todoList);
      setIsLoading(false);
    })
  }, [])

 
  // Define a useEffect React hook with todoList as a dependency
  // Inside the side-effect handler function, save the todoList inside localStorage with the key "savedTodoList"
  useEffect(() => {

    // Inside the second useEffect hook (with todoList dependency), add an if statement to check that isLoading is false before setting localStorage
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }

    // Update your side-effect function to convert todoList to a string before saving in localStorage, Hint: JSON.stringify method
    // localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList, isLoading]);

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
    
    <>

      {/* Create a level-one heading that says "Todo List" */}
      <h1>Todo List</h1>

      {/* Pass setNewTodo as a callback handler prop named onAddTodo to the AddTodoForm component 
      -Change the value of the onAddTodo prop for AddTodoForm to addTodo*/}
      <AddTodoForm onAddTodo={addTodo} />
      
      {/*  Using a ternary operator inside JSX, if isLoading is true render the loading message, otherwise render the TodoList component */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (

        <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
      )}
      

    </>

  )

}

export default App
