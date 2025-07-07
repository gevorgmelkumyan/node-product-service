import { Product } from '../entities/Product';
import { ProductId } from '../value-objects/ProductId';

export interface ProductRepository {
    findById(id: ProductId): Promise<Product | null>;
    findAll(): Promise<Product[]>;
    save(product: Product): Promise<void>;
    exists(id: ProductId): Promise<boolean>;
}
