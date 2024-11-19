

// Create a new functional React component, Declare a function named TodoListItem
//  Export TodoListItem function as default module

function TodoListItem(props) {

    // Add a multi-line return statement to your TodoListItem function (this is where we will insert JSX)
    return(
        <div>

            <li>
                
                {props.item.title}
            </li>

        </div>

       
    )

}
export default TodoListItem