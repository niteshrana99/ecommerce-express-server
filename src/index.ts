import express, { NextFunction, Request, Response } from 'express';
var cors = require('cors');

import adminStoreRouter from './routes/admin/store/store-routes';
import adminBillboardRouter from './routes/admin/billboard/billboard-routes';
import adminCategoriesRouter from './routes/admin/categories/categories-routes';
import adminSizeRouter from './routes/admin/sizes/size-routes';
import adminColorRouter from './routes/admin/colors/color-routes';
import productsRouter from './routes/admin/products/products.routes';
import ordersRouter from './routes/admin/orders/orders-routes';

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//config
require('dotenv').config();

app.use('/api', adminStoreRouter);
app.use('/api', adminBillboardRouter);
app.use('/api', adminCategoriesRouter);
app.use('/api', adminSizeRouter);
app.use('/api', adminColorRouter);
app.use('/api', productsRouter);
app.use('/api', ordersRouter);

// Error handling middleware function

// Error handling middleware function
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});


// Catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: 'Not Found' });
});

process.on('unhandledRejection', (reason: Error | any, promise: Promise<any>) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  // Application specific logging, throwing an error, or other logic here
});

process.on('uncaughtException', (error: Error) => {
  console.error('Uncaught Exception:', error);
  // Application specific logging, throwing an error, or other logic here
});

const port = process.env.PORT || 8001;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
