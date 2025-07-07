import { ProductId } from '../value-objects/ProductId';
import { ProductName } from '../value-objects/ProductName';
import { Money } from '../value-objects/Money';
import { Result } from '../../shared/Result';

export interface ProductProps {
    name: ProductName;
    price: Money;
}

export class Product {
    private readonly _id: ProductId;
    private _props: ProductProps;

    private constructor(id: ProductId, props: ProductProps) {
        this._id = id;
        this._props = props;
    }

    public static create(
        props: ProductProps,
        id?: ProductId
    ): Result<Product> {
        const validId = id || ProductId.create().getValue();

        return Result.ok<Product>(new Product(validId, props));
    }

    get id(): ProductId {
        return this._id;
    }

    get name(): ProductName {
        return this._props.name;
    }

    get price(): Money {
        return this._props.price;
    }

    public toJSON() {
        return {
            id: this._id.getValue(),
            name: this._props.name.getValue(),
            price: this._props.price.getAmount()
        };
    }
}
