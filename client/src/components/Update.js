import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import ProductForm from './ProductForm';
import DeleteButton from './DeleteButton';
const Update = (props) => {
    const { id } = useParams(); //this process is identical to the one we used with our Details.js component
    // const [title, setTitle] = useState();
    // const [price, setPrice] = useState();
    // const [description, setDescription] = useState();
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();
    // retrieve the current values for this Product so we can fill
    // in the form with what is in the db currently
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                // setTitle(res.data.Title);
                // setPrice(res.data.Price);
                // setDescription(res.data.Description);
                setProduct(res.data)
                setLoaded(true);
            })
            .catch(err => console.log(err))
    }, [])
    const updateProduct = (productParam) => {
        axios.put('http://localhost:8000/api/product/' + id, productParam)
            .then(res => {
                console.log(res);
                navigate("/"); // this will take us back to the Main.js
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>Update a Product</h1>
            {/* <form onSubmit={updateProduct}>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="number" 
                    name="price"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                    name="description"
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <input type="submit" />
            </form> */}
            {loaded && <div className ="updatecontainer"> <ProductForm onSubmitProp={updateProduct} initialTitle={product.Title}
            initialPrice={product.Price} initialDescription = {product.Description}
            /><DeleteButton productId={product._id} successCallback={() => navigate("/")}/></div>}
        </div>
    )
}
export default Update;

