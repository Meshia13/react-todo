// Inside /src directory, create a new file called TodoList.jsx


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

        {/*Create an unordered list, Inside your unordered list, insert a JavaScript expression hint: {} */}
            <ul id="myList">

            {/*Inside the JavaScript expression, map over your todoList array */}
                {todoList.map(function (item) {
                
            {/* For each Object in Array, return a list item (<li>) with the following: key attribute with value of id property,
            inner text content with value of title property*/}
                return (
                    <li key={item.id} >
                    {item.title}
                    </li>
                )
                })}

            </ul>

        </div>

    )


};
// Export TodoList function as default module
export default TodoList;

