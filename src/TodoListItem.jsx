import style from "./TodoListItem.module.css"

// Create a new functional React component, Declare a function named TodoListItem
//  Export TodoListItem function as default module

function TodoListItem({item, onRemoveTodo}) {

    // Add a multi-line return statement to your TodoListItem function (this is where we will insert JSX)
    return(
        <div className={style.Container}>

            <li className={style.ListItem}>
                
                {item.title}
                {/* Add a button element, type "button", inside the list item with text "Remove"
                -Add an onClick prop to the button element and pass a function that calls onRemoveTodo from props with the current item id as an argument */}
                <button className={style.Button} type="button" onClick={() =>onRemoveTodo(item.id)}>Remove</button> 
            </li>

        </div>

       
    )

}
export default TodoListItem