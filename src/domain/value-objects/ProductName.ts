import { Result } from '../../shared/Result';

export class ProductName {
    private readonly value: string;

    private constructor(value: string) {
        this.value = value;
    }

    public static create(value: string): Result<ProductName> {
        if (!value || value.trim().length === 0) {
            return Result.fail<ProductName>('Product name cannot be empty');
        }

        if (value.length > 100) {
            return Result.fail<ProductName>('Product name cannot exceed 100 characters');
        }

        return Result.ok<ProductName>(new ProductName(value.trim()));
    }

    public getValue(): string {
        return this.value;
    }

    public equals(other: ProductName): boolean {
        return this.value === other.value;
    }
}
