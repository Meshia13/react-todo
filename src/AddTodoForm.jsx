
// Create a new functional React component, declare a function named AddTodoForm
function AddTodoForm({ onAddTodo }) {

    
    // const [resetValue] = useState("");

    // const handleReset = (event) => {
    //     resetValue(event.target.value)
    // }

    const handleAddTodo = (event) => {
        event.preventDefault();
        let todoTitle = "";
        
        todoTitle = event.target.value;
        console.log(todoTitle);
        // event.target.elements.title.value = "";
        onAddTodo(todoTitle);
    }



    return (

        
        <div>
             {/* Create a <form> element, inside the <form> element, create a <label> element with text "Title"
                create a text <input> element with id "todoTitle", Add htmlFor attribute to <label> element with same value as id above
                create a submit <button> element with text "Add" 
                Add a name attribute to the text input with value title*/}
            <form onSubmit = {handleAddTodo}>
                <label htmlFor="todoTitle" >Title</label>
                <input type="text" id="todoTitle" name="title" onChange={handleAddTodo} />
                <button  type="submit">Add</button>
            </form>

        </div>
    )
}
// Export AddTodoForm function as default module
export default AddTodoForm