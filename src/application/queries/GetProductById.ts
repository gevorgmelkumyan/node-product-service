import { ProductDTO } from './GetAllProducts';

export interface GetProductByIdQuery {
    productId: string;
}

export interface GetProductByIdResult {
    product: ProductDTO;
}
