import express, { NextFunction, Request, Response } from 'express';
var cors = require('cors');

import adminStoreRouter from './routes/admin/store/store-routes';
import adminBillboardRouter from './routes/admin/billboard/billboard-routes';
import adminCategoriesRouter from './routes/admin/categories/categories-routes';
import adminSizeRouter from './routes/admin/sizes/size-routes';

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//config
require('dotenv').config();

app.use('/admin', adminStoreRouter);
app.use('/admin', adminBillboardRouter);
app.use('/admin', adminCategoriesRouter);
app.use('/admin', adminSizeRouter);

// Error handling middleware function
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(401).send('Unauthenticated!');
});

const port = process.env.PORT || 8001;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
