import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams, useNavigate} from "react-router-dom";
import DeleteButton from './DeleteButton';
const Detail = (props) => {
    const navigate = useNavigate();
    const [product, setProduct] = useState({})
    const {id} = useParams();
    // const deleteProduct = (productId) => {
    //     axios.delete('http://localhost:8000/api/product/' + productId)
    //         .then(res => { console.log(res)
    //             // removeFromDOM(productId)
    //         })
    //         .catch(err => console.log(err));
    //         navigate('/');
    // }
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + id)
            .then( res => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch( err => console.log(err) );
    }, []);
    return (
        <div className="updatecontainer">
            <h1>{product.Title}</h1>
            <p>{product.Price}</p>
            <p>{product.Description}</p>
            {/* <button className='delete' onClick={(e)=>{deleteProduct(product._id)}}>
                            Delete
                        </button> */}
            <DeleteButton productId = {product._id} successCallback =  { () => navigate('/')}/>
        </div>
    );
}
export default Detail;

