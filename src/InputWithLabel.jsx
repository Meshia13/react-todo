
// Add props as a parameter in the InputWithLabel function update todoTitle and handleTitleChange references to come from props
export default function InputWithLabel(props) {
    return (
        <>
        {/* Replace the text inside the label element with a new props variable named label 
        - Replace label prop with children so that any child node(s) are used as the label text*/}
        <label htmlFor="todoTitle" >{props.children}</label>
        <input 
        type="text" 
        id="todoTitle" 
        name="title" 
        value={props.todoTitle} 
        onChange={props.handleTitleChange} />

        </>
    )
}