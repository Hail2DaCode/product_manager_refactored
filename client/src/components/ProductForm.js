import React, { useState } from 'react'
const ProductForm = (props) => {
    //keep track of what is being typed via useState hook
    const {initialTitle, initialPrice, initialDescription, onSubmitProp} = props;
    const [Title, setTitle] = useState(initialTitle); 
    const [Price, setPrice] = useState(initialPrice);
    const [Description, setDescription] = useState(initialDescription);
    const [error, setError] = useState(false)
    //handler when the form is submitted
    const onSubmitHandler = (e) => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new Product
        onSubmitProp({Title,Price,Description}); 
        if (!error) {
            setTitle("");
            setPrice("");
            setDescription("");
        }
    }
    return (
        <div className="maxcontainer">
            <h1 className="header">Product Manager</h1>
        <form onSubmit={onSubmitHandler}>
            <div className='container'>
                <label className ="label">Title:</label>
                <input className ="input" type="text" value={Title} onChange = {(e)=>setTitle(e.target.value)}/>
            </div>
            <div className='container'>
                <label className ="label" >Price:</label>
                <input className ="input" type="number" value = {Price} onChange = {(e)=>{setPrice(e.target.value); console.log(e.target.value)}}/>
            </div>
            <div className='container'>
                <label className ="label">Description:</label>
                <input className ="input" type="text" value = {Description} onChange = {(e)=>setDescription(e.target.value)}/>
            </div>
            <button type="submit">Create</button>
        </form>
        </div>
        
    )

}
export default ProductForm;

