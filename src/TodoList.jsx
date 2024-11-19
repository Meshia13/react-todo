import TodoListItem from "./TodoListItem";

const todoList = [

    { id: 1, title: "Go to Carribean"},
    { id: 2, title: "Complete a 5k Race"},
    { id: 3, title: "Complete 30-day workout challenge"}
  
  ];

// Create a new functional React component, declare a function named 'TodoList'
function TodoList() {
    
 
    // Add a multi-line return statement to your TodoList function (this is where we will insert JSX)
    return (

        <div>
            
            <ul id="myList">

                {/*Inside the map() method, use the TodoListItem component, Pass key as a prop equal to the id of the todo object
                Pass todo as a prop */}
                {todoList.map(function (item) {
                    return(
                        
                        <TodoListItem key={item.id} item={item} />
                    )
                    
                
                })}

            </ul>
                
        </div>
    )
};
// Export TodoList function as default module
export default TodoList;

