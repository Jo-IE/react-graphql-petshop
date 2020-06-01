const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');
const graphQlSchema = require('./server/graphql/schema/index');
const graphQlResolvers = require('./server/graphql/resolvers/index');
const cors = require('cors');
const db = require('./server/db');

require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
});

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(
    '/graphql',
    graphqlHttp({
        schema: graphQlSchema,
        rootValue: graphQlResolvers,
        graphiql: true,
    })
);
db();
app.listen(process.env.PORT || 5000, () =>
    console.log('Server is now listening on port 5000')
);

module.exports = app;
