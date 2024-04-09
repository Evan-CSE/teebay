import ProductCard from "../../Components/ProductCard/ProductCard";
import { data } from "../../Data/Products";
import { Product } from "../../DataModel/Product";
import '../../App.css';
import { Link } from "react-router-dom";

export default function MyProducts(): JSX.Element {
    // fetch products

    const onDeletePress = (product: Product) => {
        const shouldDelete = confirm("Are you sure?");

        if (shouldDelete) {
            alert(`Deleted product ${product.name}`);
            console.log(product);
        }
    }
    return (
        <div className = "d-flex align-center flex-col">
            <h1 className = "mt-3">MY PRODUCTS</h1>
            {
                data.map((product: Product) => {
                    return (
                        <Link to = {`/edit/${product.id}`}>
                            <ProductCard
                                key                 = {product.id}
                                productInfo         = {product}
                                showDeleteButton    = {true}
                                onDeleteButtonPress = {() => onDeletePress(product)}
                            />
                        </Link>
                    )
                })
            }
        </div>
    )
}