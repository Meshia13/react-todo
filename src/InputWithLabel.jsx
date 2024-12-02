import { useEffect, useRef } from "react"

// Add props as a parameter in the InputWithLabel function update todoTitle and handleTitleChange references to come from props
export default function InputWithLabel(props) {

    // Use the useRef React hook to create an imperative ref named inputRef
    const inputRef = useRef();

    // Define a useEffect React hook without dependency list
    useEffect(() => {
        //  Inside the side-effect handler function, call the focus() method on the current inputRef
        inputRef.current.focus();
    })

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
        onChange={props.handleTitleChange}
        // Add a ref prop with value inputRef on the input element
        ref={inputRef} />

        </>
    )
}