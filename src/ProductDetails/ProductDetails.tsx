import { useEffect, useState } from "react";
import { Product } from "../DataModel/Product";
import { useParams } from "react-router-dom";
import './ProductDetails.css'

export default function ProductDetails (): JSX.Element {
    const [product, setProduct] = useState<Product | undefined>();
    const { pvId } = useParams();

    const data: Product[] = [
        {
            id: 1,
            name: "Smartphone",
            categories: "Electronics",
            price: 500,
            description: "A high-quality smartphone with advanced features."
        },
        {
            id: 2,
            name: "Laptop",
            categories: "Electronics",
            price: 1200,
            description: "A powerful laptop suitable for gaming and professional work."
        },
        {
            id: 3,
            name: "Watch",
            categories: "Fashion",
            price: 150,
            description: "A stylish watch with a leather strap and modern design."
        },
        {
            id: 4,
            name: "Sneakers",
            categories: "Fashion",
            price: 80,
            description: "Comfortable sneakers for casual wear and sports activities."
        },
        {
            id: 5,
            name: "Headphones",
            categories: "Electronics",
            price: 100,
            description: "Wireless headphones with noise-cancellation feature."
        }
    ];
    

    useEffect(() => {
        // fetch product
        if (pvId !== undefined) {
            const maybeProduct = data.find((product) => product.id === parseInt(pvId));
            if (maybeProduct) {
                setProduct(maybeProduct);
            }
        }
    }, [product])

    return(
        !product || !pvId
            ?   <></> // loader 
            : <ProductComponent {...product}/>
    )
}

function ProductComponent (product: Product): JSX.Element {
    return (
        <div className = "product-container">
            <div className = "product-details">
            <h1>
                {product.name}
            </h1>
            <p className = "category-price">
                Categories: {product.categories}
            </p>
            <p className = "category-price">
                Price: {product.price} $
            </p>
            <p>
                {product.description}
            </p>
            <div className = "button-container">
                <button onClick = {() => alert("Rented")}>
                    Rent
                </button>
                <button onClick = {() => alert("Bought")}>
                    Buy
                </button>
            </div>
        </div>
        </div>
    )
}