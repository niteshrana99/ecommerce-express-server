import express, { NextFunction, Request, Response } from 'express';
var cors = require('cors');

import adminStoreRouter from './routes/admin/store/store-routes';
import adminBillboardRouter from './routes/admin/billboard/billboard-routes';

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//config
require('dotenv').config();

//routes
// app.use('/', (req, res) => {
//   res.send('Hello World!');
// });
app.use('/admin', adminStoreRouter);
app.use('/admin', adminBillboardRouter);

// Error handling middleware function
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(401).send('Unauthenticated!');
});

const port = process.env.PORT || 8001;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
