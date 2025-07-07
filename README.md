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

## Example Requests

### Get Products
```curl
curl --location 'http://localhost:3001/products'
```

Response
```json
[
    {
        "id": "f155412d-4d25-4bcb-a780-93b7037c4506",
        "name": "Laptop",
        "price": 999.99
    },
    {
        "id": "321a6742-3b60-4f28-9058-b60bd8888da2",
        "name": "Mouse",
        "price": 29.99
    },
    {
        "id": "d5459ccc-f935-4470-8ea4-937d0481cb04",
        "name": "Keyboard",
        "price": 79.99
    },
    {
        "id": "527478d2-2757-41a7-b3eb-038e8110b1e6",
        "name": "Monitor",
        "price": 299.99
    },
    {
        "id": "38a9fe61-840b-49a0-abce-748125e148ac",
        "name": "Headphones",
        "price": 149.99
    }
]
```

### Get Product By ID

```curl
curl --location 'http://localhost:3001/products/f155412d-4d25-4bcb-a780-93b7037c4506'
```

Response
```json
{
    "id": "f155412d-4d25-4bcb-a780-93b7037c4506",
    "name": "Laptop",
    "price": 999.99
}
```
