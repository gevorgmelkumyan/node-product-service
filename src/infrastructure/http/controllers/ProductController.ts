import { FastifyRequest, FastifyReply } from 'fastify';
import { ProductApplicationService } from '../../../application/services/ProductApplicationService';

interface IdParams {
    id: string;
}

export class ProductController {
    constructor(private productService: ProductApplicationService) {}

    async getProducts(request: FastifyRequest, reply: FastifyReply): Promise<void> {
        const result = await this.productService.getAllProducts();

        if (result.isFailure) {
            reply.status(500).send({ error: result.errorValue() });
            return;
        }

        reply.send(result.getValue().products);
    }

    async getProductById(
        request: FastifyRequest<{ Params: IdParams }>,
        reply: FastifyReply
    ): Promise<void> {
        const result = await this.productService.getProductById({
            productId: request.params.id
        });

        if (result.isFailure) {
            const error = result.errorValue();
            const statusCode = error === 'Product not found' ? 404 : 400;
            reply.status(statusCode).send({ error });
            return;
        }

        reply.send(result.getValue().product);
    }
}
