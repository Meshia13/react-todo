import { useEffect, useRef } from "react"
import style from "./InputWithLabel.module.css"
import PropTypes, { func } from "prop-types";

// Add props as a parameter in the InputWithLabel function update todoTitle and handleTitleChange references to come from props
export default function InputWithLabel({todoTitle, handleTitleChange, children}) {

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
        <label htmlFor="todoTitle" >{children}</label>
        <input className={style.Text}
        type="text" 
        id="todoTitle" 
        name="title" 
        value={todoTitle} 
        onChange={handleTitleChange}
        // Add a ref prop with value inputRef on the input element
        ref={inputRef} />

        </>
    )
}

InputWithLabel.propTypes = {
    children: PropTypes.node,
    todoTitle: PropTypes.string,
    handleTitleChange: func.isRequired,
}