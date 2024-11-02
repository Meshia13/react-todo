
// Above the App() function, create an empty Array and store it in a variable named todoList
// Inside the Array, create at least 3 Objects with the following properties: id: unique identifier, title: summary of the todo item 
const todoList = [

  { id: 1, title: "Go to Carribean"},
  { id: 2, title: "Complete a 5k Race"},
  { id: 3, title: "Complete 30-day workout challenge"}

];

function App() {
  
  return (
    <>
    {/* Create a level-one heading that says "Todo List" */}
    <h1>Todo List</h1>

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


    </>

  )

}

export default App
