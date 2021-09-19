import { handlerPath } from '@libs/handlerResolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.getProductById`,
  environment: {
    PG_HOST: process.env.PG_HOST,
    PG_DATABASE: process.env.PG_HOST,
    PG_PORT: process.env.PG_HOST,
    PG_USER: process.env.PG_HOST,
    PG_PASSWORD: process.env.PG_HOST, 
  },
  events: [
    {
      http: {
        method: 'get',
        path: 'products/{productId}',
        cors: true
      }
    }
  ]
}
