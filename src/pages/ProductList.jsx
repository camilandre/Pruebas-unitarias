import { useEffect, useState } from 'react';
import { getProduct, getProducts } from '../service/Api';
import { TextField } from '@mui/material';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState();

    const fetchProducts = async () => {
        const productsData = await getProducts();
        setProducts(productsData);
    };

    const fetchProduct = async (id) => {
        const productData = await getProduct(id);
        setProduct(productData);
        console.log(productData)
    };
    
    useEffect(() => {
        fetchProducts()
    }, []);

    return (
        <div>
        <h1>Product List</h1>
        <button onClick={() => fetchProduct(2)}>Click me</button>
        <ul>
            {products.map(product => (
                <li title={product.title} key={product.id}>{product.title}</li>
            ))}
        </ul>
        {product && <TextField label={product?.title} />}
        </div>
    );
};

export default ProductList;
