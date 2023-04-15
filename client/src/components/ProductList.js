import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';
const ProductList = (props) => {
    /* We deconstruct getter and setter which were passed down 
    via props by the parent component (app.js) to our child 
    component (ProductList.js). Now we can easily use the getter 
    and setter without having to write props.getter or props.setter every time: */
    const {removeFromDOM, productList} = props;
    
    
    return (
        <div className = "listContainer">
            <h1>All Products:</h1>
            {
                productList.map((product, index)=>{
                return <div key = {index}className='listContainer2'><Link className = "Link" to={`/${product._id}`} key={index}>{product.Title}</Link>
                <Link className = "edit "to={"/edit/" + product._id}>
                    Edit
                </Link>
                <DeleteButton productId={product._id} successCallback={()=>props.removeFromDOM(product._id)}/>
                </div>
                
                
                })
            }
        </div>
    )
}
export default ProductList;

