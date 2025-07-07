import { Product } from '../../domain/entities/Product';
import { ProductId } from '../../domain/value-objects/ProductId';
import { ProductName } from '../../domain/value-objects/ProductName';
import { Money } from '../../domain/value-objects/Money';
import { ProductRepository } from '../../domain/repositories/ProductRepository';

export class InMemoryProductRepository implements ProductRepository {
    private products: Map<string, Product> = new Map();

    constructor() {
        this.initializeSampleProducts();

        console.log('Available product IDs: ', this.products.keys());
    }

    private initializeSampleProducts(): void {
        const sampleData = [
            { name: 'Laptop', price: 999.99},
            { name: 'Mouse', price: 29.99},
            { name: 'Keyboard', price: 79.99},
            { name: 'Monitor', price: 299.99},
            { name: 'Headphones', price: 149.99}
        ];

        sampleData.forEach(data => {
            const productId = ProductId.create().getValue();
            const productName = ProductName.create(data.name).getValue();
            const money = Money.create(data.price).getValue();

            const product = Product.create({
                name: productName,
                price: money
            }, productId).getValue();

            this.products.set(productId.getValue(), product);
        });
    }

    async findById(id: ProductId): Promise<Product | null> {
        return this.products.get(id.getValue()) || null;
    }

    async findAll(): Promise<Product[]> {
        return Array.from(this.products.values());
    }

    async save(product: Product): Promise<void> {
        this.products.set(product.id.getValue(), product);
    }

    async exists(id: ProductId): Promise<boolean> {
        return this.products.has(id.getValue());
    }
}
