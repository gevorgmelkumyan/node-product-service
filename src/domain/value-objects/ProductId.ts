import { v4 as uuidv4, validate } from 'uuid';
import { Result } from '../../shared/Result';

export class ProductId {
    private readonly value: string;

    private constructor(value: string) {
        this.value = value;
    }

    public static create(value?: string): Result<ProductId> {
        const id = value || uuidv4();

        if (!validate(id)) {
            return Result.fail<ProductId>('Invalid Product ID format');
        }

        return Result.ok<ProductId>(new ProductId(id));
    }

    public getValue(): string {
        return this.value;
    }

    public equals(other: ProductId): boolean {
        return this.value === other.value;
    }

    public toString(): string {
        return this.value;
    }
}
