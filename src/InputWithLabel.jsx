
// Add props as a parameter in the InputWithLabel function update todoTitle and handleTitleChange references to come from props
export default function InputWithLabel(props) {
    return (
        <>

        <label htmlFor="todoTitle" >Title</label>
        <input 
        type="text" 
        id="todoTitle" 
        name="title" 
        value={props.todoTitle} 
        onChange={props.handleTitleChange} />

        </>
    )
}