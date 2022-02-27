const fs = require('fs');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const productsDB = [
    {
        id: 1,
        productName: 'Sony Truly Wireless Earbuds',
        pricePerUnit: 50,
        category: 'Electronics',
        imageUrl: 'https://www.sony.com/image/53d5d860b293bac0afad1a5181e6e02a?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320',
    },
    {
        id: 2,
        productName: 'Allen Solly Casual shirt',
        pricePerUnit: 75,
        category: 'Shirts',
        imageUrl: 'https://i.pinimg.com/564x/df/fd/74/dffd7405403fc31b7b7d8799593dcbf3.jpg',
    },
    {
        id: 3,
        productName: "Mac Book Pro Sleeve",
        pricePerUnit: 80,
        category: 'Accessories',
        imageUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MRQL2?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1529618320842',
    },

    {
        id: 4,
        productName: "Men's Casual Jacket",
        pricePerUnit: 120,
        category: 'Jackets',
        imageUrl: 'https://www.dhresource.com/0x0/f2/albu/g9/M01/1E/A8/rBVaWFwvAOKAZhMRAAP55J5S7KI837.jpg',
    },
];

const resolvers = {
    Query: {
        productList,
    },
    Mutation: {
        addProduct,
    },
};

function productList() {
    return productsDB;
}

function addProduct(_, { product }) {
    product.id = productsDB.length + 1;
    productsDB.push(product);
    return product;
}

const server = new ApolloServer({
    typeDefs: fs.readFileSync('./server/schema.graphql', 'utf-8'),
    resolvers,
});

const app = express();

app.use(express.static('public'));

server.applyMiddleware({ app, path: '/graphql' });

app.listen(3000, function () {
    console.log('App started on port 3000');
});