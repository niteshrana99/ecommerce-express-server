"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var cors = require('cors');
const store_routes_1 = __importDefault(require("./routes/admin/store/store-routes"));
const billboard_routes_1 = __importDefault(require("./routes/admin/billboard/billboard-routes"));
const categories_routes_1 = __importDefault(require("./routes/admin/categories/categories-routes"));
const size_routes_1 = __importDefault(require("./routes/admin/sizes/size-routes"));
const color_routes_1 = __importDefault(require("./routes/admin/colors/color-routes"));
const products_routes_1 = __importDefault(require("./routes/admin/products/products.routes"));
const orders_routes_1 = __importDefault(require("./routes/admin/orders/orders-routes"));
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(cors());
//config
require('dotenv').config();
app.use('/api', store_routes_1.default);
app.use('/api', billboard_routes_1.default);
app.use('/api', categories_routes_1.default);
app.use('/api', size_routes_1.default);
app.use('/api', color_routes_1.default);
app.use('/api', products_routes_1.default);
app.use('/api', orders_routes_1.default);
// Error handling middleware function
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(401).send('Unauthenticated!');
});
const port = process.env.PORT || 8001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
