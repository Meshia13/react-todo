import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import {useState, useEffect} from "react";

function App() {

  // const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem("savedTodoList")) || [todoList]);
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /*  */
  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(
        () => {
          const savedTodoList = JSON.parse(localStorage.getItem("savedTodoList")) || [todoList];
          resolve({data : {todoList: savedTodoList}})
        }, 2000)
    })
    .then(result => {
      setTodoList(result.data.todoList);
      setIsLoading(false);
    })
  }, [])

 
  // Define a useEffect React hook with todoList as a dependency
  // Inside the side-effect handler function, save the todoList inside localStorage with the key "savedTodoList"
  useEffect(() => {

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

      {/* Below the level-one heading, use the AddTodoForm component */}
      {/* Pass setNewTodo as a callback handler prop named onAddTodo to the AddTodoForm component 
      -Change the value of the onAddTodo prop for AddTodoForm to addTodo*/}
      <AddTodoForm onAddTodo={addTodo} />
      
      {isLoading ? (
        <p>Loading...</p>
      ) : (

        <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
      )}
      

    </>

  )

}

export default App
