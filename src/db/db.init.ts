require('dotenv').config();

import Product from "./models/product";

const isDev = process.env.NODE_ENV === 'development';

const init = () => Promise.all([
    Product.sync({alter: isDev,})
])

export default init;