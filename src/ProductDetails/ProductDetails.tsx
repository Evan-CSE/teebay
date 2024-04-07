import { useEffect, useState } from "react";
import { Product } from "../DataModel/Product";
import ProductCard from "../ProductCard/ProductCard";
import { useParams } from "react-router-dom";

export default function ProductDetails (): JSX.Element {
    const [product, setProduct] = useState<Product | undefined>();
    const { pvId } = useParams();

    const data: Product[] = [
        {
            id         : 1,
            name       : "Product 1",
            categories : "Category A",
            price      : 10,
            description: "Description of Product 1"
        },
        {
            id         : 2,
            name       : "Product 2",
            categories : "Category B",
            price      : 20,
            description: "Description of Product 2"
        },
        {
            id         : 3,
            name       : "Product 3",
            categories : "Category C",
            price      : 30,
            description: "Description of Product 3"
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
            : <ProductCard key = {pvId} {...product}/>
    )
}