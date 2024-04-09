import { data } from "../Data/Products";

class ProductService {
    public getProductById(id: number) {
        return data.find((product) => {
            console.log(product.id, id, typeof(product.id), typeof(id));
            return (product.id === id)
        });
    }
}
export default new ProductService();