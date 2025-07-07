import { FastifyInstance } from 'fastify';
import { ProductController } from '../controllers/ProductController';
import { ProductApplicationService } from '../../../application/services/ProductApplicationService';
import { InMemoryProductRepository } from '../../repositories/InMemoryProductRepository';

async function productsRoutes(fastify: FastifyInstance): Promise<void> {
    const productRepository = new InMemoryProductRepository();
    const productService = new ProductApplicationService(productRepository);
    const productController = new ProductController(productService);

    fastify.get('/', productController.getProducts.bind(productController));
    fastify.get('/:id', productController.getProductById.bind(productController));
}

export default productsRoutes;
