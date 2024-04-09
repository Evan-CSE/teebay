
import './ProductCard.css';
import '../../App.css';
import DeleteIcon from '../../Assets/delete.svg';
import { Props } from './Props';

export default function ProductCard({productInfo, showDeleteButton = false, onDeleteButtonPress = () => {}}): JSX.Element {
    const maybeTitleAndDeleteButton =
        showDeleteButton
            ? (
                <div className = 'd-flex justify-between align-center' style = {{marginTop: '2px'}}>
                    <h1 className = 'title'>
                        {productInfo.name}
                    </h1>
                    <div className = 'px-1 text-decoration-none' onClick = {onDeleteButtonPress}>
                        <img src = {DeleteIcon} height = {25} width = {25}/>
                    </div>
                </div>
            )
            : (
                <h1 className = 'title'>
                    {productInfo.name}
                </h1>
            )
    
    return (
        <div className = "card">
            {maybeTitleAndDeleteButton}
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