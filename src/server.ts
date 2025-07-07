import dotenv from 'dotenv';
import { buildApp } from './app';

dotenv.config();

const start = async () => {
    try {
        const app = await buildApp();
        const port = parseInt(process.env.PORT || '3001', 10);
        const host = process.env.HOST || '0.0.0.0';

        await app.listen({ port, host });
        console.log(`Product Service running on http://${host}:${port}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

start();
