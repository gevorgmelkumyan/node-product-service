export interface ProductDTO {
    id: string;
    name: string;
    price: number;
}

export interface GetAllProductsQuery {}

export interface GetAllProductsResult {
    products: ProductDTO[];
}
