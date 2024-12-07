import {useState} from "react";

// Add props as a parameter in the AddTodoForm function
function AddTodoForm({onAddTodo}) {

    // Create new state variable named todoTitle with setter setTodoTitle
    const [todoTitle, setTodoTitle] = useState("");
    
    const handleTitleChange = (event) => {
        const newTodoTitle = event.target.value;
        setTodoTitle(newTodoTitle);
    }

    const handleAddTodo = (event) => {
        // inside this function, prevent the default behavior of the form submit
        event.preventDefault();
        // retrieve the value of the title element from the event target and store it in a variable named todoTitle

        console.log(todoTitle);
       
        // Inside the handleAddTodo function, invoke the onAddTodo callback prop and pass todoTitle as an argument
        onAddTodo({title: todoTitle, id: Date.now()});
        
        // Function to clear input when form is submitted
        setTodoTitle("");
    }

    return (

        
        <div>
             {/* Create a <form> element, inside the <form> element, create a <label> element with text "Title"
                create a text <input> element with id "todoTitle", Add htmlFor attribute to <label> element with same value as id above
                create a submit <button> element with text "Add" 
                Add a name attribute to the text input with value title*/}
                {/* Add onSubmit prop to form element and pass the handleAddTodo function by reference */}
            <form onSubmit = {handleAddTodo}>
                <label htmlFor="todoTitle" >Title</label>
                <input type="text" id="todoTitle" name="title" value={todoTitle} onChange={handleTitleChange} />
                <button  type="submit">Add</button>
            </form>

        </div>
    )
}
// Export AddTodoForm function as default module
export default AddTodoForm