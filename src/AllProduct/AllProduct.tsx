import { Product } from "../DataModel/Product";
import ProductCard from "../ProductCard/ProductCard";
import '../AllProduct/AllProduct.css'
import { Link } from "react-router-dom";

export default function AllProduct(): JSX.Element {
    // fetch all products here
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

    return (
        <div className = "main">
            <h1>
                ALL PRODUCTS
            </h1>
            {
                data.map((product: Product) => 
                    <Link to = {`/product/${product.id}`} style = {{textDecoration: 'none', color: 'inherit'}}>
                        <ProductCard key = {product.id} {...product}/>
                    </Link>
                )
            }
        </div>
    )
}