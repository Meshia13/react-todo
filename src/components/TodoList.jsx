import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";

/*Create a new functional React component, declare a function named 'TodoList' 
-Add props as a parameter to the TodoList functional component*/
function TodoList({todoList, onRemoveTodo}) {
     
    // Add a multi-line return statement to your TodoList function (this is where we will insert JSX)
    return (

        <div>
            
            <ul id="myList">

                {/*Inside the map() method, use the TodoListItem component, Pass key as a prop equal to the id of the todo object
                - Pass todo as a prop 
                - Change todoList to reference props instead of the hard-coded variable (added props. to beginning
                -Pass onRemoveTodo prop as a callback handler prop named onRemoveTodo to the TodoListItem component*/}
                {todoList.map(function (item) {
                    return(
                        
                        <TodoListItem 
                        key={item.id} 
                        item={item} 
                        onRemoveTodo={onRemoveTodo}/>
                    )
                    
                
                })}

            </ul>
                
        </div>
    )
};

TodoList.propTypes = {
    todoList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      })
    ),
    onRemoveTodo: PropTypes.func.isRequired,
  };

// Export TodoList function as default module
export default TodoList;

