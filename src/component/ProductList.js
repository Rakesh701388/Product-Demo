import React, { useState, useEffect } from "react";
import axios from "axios";
function ProductList() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5287/weatherforecast") // Change to your API URL
            .then(response => setProducts(response.data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);
    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name} - ${product.price}</li>
                ))}
            </ul>
        </div>
    );
}
export default ProductList;