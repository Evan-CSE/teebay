import { Product } from "../../DataModel/Product"

export interface Props {
    product             : Product,
    showDeleteButton?   : boolean,
    onDeleteButtonPress?: () => void
}