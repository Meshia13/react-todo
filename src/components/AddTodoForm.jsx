import {useState} from "react";
import InputWithLabel from "./InputWithLabel";
import style from "./AddTodoForm.module.css"
import PropTypes from "prop-types";

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
            {/* Add onSubmit prop to form element and pass the handleAddTodo function by reference 
            -Refactor AddTodoForm.jsx to use new InputWithLabel component and pass the necessary props
            - Pass a label prop to the InputWithLabel component with value "Title"*/}
            <form onSubmit = {handleAddTodo} className={style.Container}>
                <InputWithLabel 
                todoTitle={todoTitle} 
                handleTitleChange={handleTitleChange}>
                    {/* Pass the text Title inside the component tags */}
                    Title
                </InputWithLabel>
                <button  type="submit">Add</button>
            </form>

        </div>
    )
}

// Below the AddTodoForm function, define the propTypes property of that function as a new object
// Inside the object, define a property with key onAddTodo (prop name) and value PropTypes.func (function data type)
AddTodoForm.propTypes = {
    onAddTodo: PropTypes.func.isRequired,
}

// Export AddTodoForm function as default module
export default AddTodoForm