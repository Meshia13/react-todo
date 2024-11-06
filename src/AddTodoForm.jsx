// Inside /src directory, create a new file called AddTodoForm.jsx

// Create a new functional React component, declare a function named AddTodoForm
function AddTodoForm() {

    return (

        
        <div>
             {/* Create a <form> element, inside the <form> element, create a <label> element with text "Title"
                create a text <input> element with id "todoTitle", Add htmlFor attribute to <label> element with same value as id above
                create a submit <button> element with text "Add" */}
            <form action="">
                <label htmlFor="todoTitle">Title</label>
                <input type="text" id="todoTitle" />
                <button type="submit">Add</button>
            </form>

        </div>
    )
}
// Export AddTodoForm function as default module
export default AddTodoForm