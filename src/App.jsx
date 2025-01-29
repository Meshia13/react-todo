import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import {useState, useEffect} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import style from "./App.module.css";


function App() {


  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  
  /* Above the first useEffect create a new async function fetchData 
  Inside the fetchData function, declare an empty object variable named options
  add a method key with the value 'GET'
  add a headers key with an object {Authorization:Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}}`*/
  const fetchData = async() => {

    const options = {
      method : "GET",
      headers : {Authorization : `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`},
    };

    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`

    /* in the try block: add a const response that awaits fetch. Pass in url and options as arguments for the fetch.
    add a conditional statement that throws a new Error if response.ok is false.
    provide the Error an argument Error: ${response.status} */
    try {
      const response = await fetch(url, options);

      if(!response.ok) {
        const message = `Error has ocurred: ${response.status}`;
        throw new Error(message);
      }

      //  declare a variable, data, that awaits a parsed version of response (hint: response.json())
      const data = await response.json();
      
      // declare another variable, todos which accepts the results of mapping data.records into an array of todo objects
      const todos = data.records.map((todo) => {
        const newTodo = {
          title : todo.fields.title,
          id : todo.id
        }
        return newTodo;
      }) 

      // set the application's todoList by passing the todos created above to setTodoList
      setTodoList(todos);

      // use setIsLoading to set isLoading to false to indicate to the user the fetch is complete
      setIsLoading(false);
    }

    // create a console statement that logs the error's message.
    catch (error) {
      console.log(error.message);
    }
  
  }

  // Stretch Practice
  const postData = async(newTodo) => {

    const options = {
      method : "POST",
      headers : {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
      body : JSON.stringify({
        fields : {
          title : newTodo.title,
        }
      }),
    };
    
    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`

    try {

      const response = await fetch(url, options);

      if(!response.ok) {
        const message = `Error has ocurred: ${response.status}`;
        throw new Error(message);
      }
      
      const dataResponse = await response.json();

      const newPostTodo = {
        title : dataResponse.fields.title,
        id : dataResponse.id
      }
       console.log(dataResponse)

        // set the application's todoList by passing the todos created above to setTodoList
      setTodoList([...todoList, newPostTodo])


    }
   
    catch (error) {
      console.log(error.message);
    }
  }

  
  /* replace the contents of the useEffect with a call to fetchData() */
  useEffect (() => {
    fetch(fetchData())
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
    /*  Wrap existing JSX within new BrowserRouter component
        Inside BrowserRouter, wrap existing JSX within new Routes component
        Inside Routes, wrap existing JSX within new Route component with prop path equal to the root path ("/") */
    <BrowserRouter>
      <Routes>
        <Route 
          path="/"
          element= {
            
          <>

          {/* Create a level-one heading that says "Todo List" */}
          <h1 className={style.Title}>To Do List</h1>

          {/* Pass setNewTodo as a callback handler prop named onAddTodo to the AddTodoForm component 
          -Change the value of the onAddTodo prop for AddTodoForm to addTodo*/}
          <AddTodoForm onAddTodo={postData} />

          {/*  Using a ternary operator inside JSX, if isLoading is true render the loading message, otherwise render the TodoList component */}
          {isLoading ? (
            <p>Loading...</p>
          ) : (

            <TodoList todoList={todoList} onRemoveTodo={removeTodo}/>
          )}


          </>
        }
        />

        {/* Below the Route component, create a new Route with path "/new"
          Inside the Route component, create a level-one heading with text "New Todo List" */}
        <Route 
          path="/new"
          element= {
            <h1>New Todo List</h1>
          }
        />

      </Routes>
  
    </BrowserRouter>

  )

}

export default App
