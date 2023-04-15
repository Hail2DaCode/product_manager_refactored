import React from 'react';
import axios from 'axios';
const DeleteButton = (props) => {
    const { productId, successCallback } = props;
    const deleteProduct = () => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then( (res) =>{console.log(res);
                successCallback();
            })
            .catch(err => console.log(err));
    }
    return (
        <button onClick={deleteProduct}>
            Delete
        </button>
    )
}
export default DeleteButton;

