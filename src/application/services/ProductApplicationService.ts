import { ProductRepository } from '../../domain/repositories/ProductRepository';
import { ProductId } from '../../domain/value-objects/ProductId';
import { Result } from '../../shared/Result';
import { GetAllProductsResult } from '../queries/GetAllProducts';
import { GetProductByIdQuery, GetProductByIdResult } from '../queries/GetProductById';

export class ProductApplicationService {
    constructor(private productRepository: ProductRepository) {}

    async getAllProducts(): Promise<Result<GetAllProductsResult>> {
        try {
            const products = await this.productRepository.findAll();
            return Result.ok<GetAllProductsResult>({
                products: products.map(p => p.toJSON())
            });
        } catch (error) {
            return Result.fail<GetAllProductsResult>('Failed to fetch products');
        }
    }

    async getProductById(query: GetProductByIdQuery): Promise<Result<GetProductByIdResult>> {
        const productIdOrError = ProductId.create(query.productId);

        if (productIdOrError.isFailure) {
            return Result.fail<GetProductByIdResult>(productIdOrError.errorValue());
        }

        const productId = productIdOrError.getValue();
        const product = await this.productRepository.findById(productId);

        if (!product) {
            return Result.fail<GetProductByIdResult>('Product not found');
        }

        return Result.ok<GetProductByIdResult>({
            product: product.toJSON()
        });
    }
}
