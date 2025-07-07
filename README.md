# Node Product Service (Fastify)

A Node.js microservice that provides endpoints for fetching products.

## API Endpoints
```bash
GET /products
GET /products/:id
```

## Setup Instructions

1. **Clone this repo**

```bash
git clone git@github.com:gevorgmelkumyan/node-product-service.git
cd node-product-service
```
2. Make sure you have Node.js version 22+ with `pnpm` and install dependencies
```bash
pnpm install
```
3. Create `.env`

```bash
cp .env.example .env
```
4. Run the service
```bash
pnpm run dev
```
The service will be available at http://localhost:3001

You can also build and run the service:
```bash
pnpm run build
pnpm run start
```
