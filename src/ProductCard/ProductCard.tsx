import { Product } from '../DataModel/Product'
import './ProductCard.css'

export default function ProductCard(productInfo: Product): JSX.Element {
    return (
        <div className = "card">
            <h1 className = 'title'>
                {productInfo.name}
            </h1>
            <p className = 'category'>
                {productInfo.categories}
            </p>
            <p className = 'price'>
                {productInfo.price}
            </p>
            <p className = 'description'>
                {productInfo.description}
            </p>
        </div>
    )
}