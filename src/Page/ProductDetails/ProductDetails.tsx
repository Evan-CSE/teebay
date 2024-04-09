import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ProductDetails.css'
import { Product } from "../../DataModel/Product";
import { data } from "../../Data/Products";

export default function ProductDetails (): JSX.Element {
    const [product, setProduct] = useState<Product | undefined>();
    const { pvId } = useParams();

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