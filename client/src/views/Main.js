import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
const Main = (props) => {
    
    const [productList, setProductList] = useState([]);
    // const removeFromDom = productId => {
    //     setProduct(product.filter(product => product._id != productId));}
    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res => {
                setProductList(res.data);
            })
            .catch((err)=>console.log(err))
    }, [])
    const removeFromDom = productId => {
        axios.delete("http://localhost:8000/api/product/" + productId)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setProductList(productList.filter(product=> product._id !== productId));
        })
        .catch((err)=>console.log(err))
        
    }
    const createProduct = productParam => {
        axios.post('http://localhost:8000/api/product', productParam)
            .then(res => {
                console.log(res);
                console.log(res.data)
                setProductList([...productList, res.data])
            })
            .catch((err)=>console.log(err))
    }
    return (
        <div>
    	{/* ProductForm and Product List can both utilize the getter and setter established in their parent component: */}
            <ProductForm onSubmitProp={createProduct} initialTitle = "" initialPrice = "" initialDescription = "" />
            <hr/>
            <ProductList productList={productList}  removeFromDOM = {removeFromDom} />
        </div>
    )
}
export default Main;
