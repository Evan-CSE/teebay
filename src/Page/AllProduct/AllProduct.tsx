import { Product } from "../../DataModel/Product";
import { Link } from "react-router-dom";
import {data} from '../../Data/Products';
import ProductCard from "../../Components/ProductCard/ProductCard";
import '../../App.css';

export default function AllProduct(): JSX.Element {
    // fetch all products here

    return (
        <div className = "d-flex flex-col align-center">
            <h1 className = "mt-3">
                ALL PRODUCTS
            </h1>
            {
                data.map((product: Product) => 
                    <Link to = {`/product/${product.id}`} style = {{textDecoration: 'none', color: 'inherit'}}>
                        <ProductCard key = {product.id} productInfo = {product}/>
                    </Link>
                )
            }
        </div>
    )
}