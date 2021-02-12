// practicing graphQL
const express = require('express');
const graphqlHTTP = require('express-graphql');
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} = require('graphql');
const app = express();

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'hello world',
        fields: () => ({
            message: {
                type: GraphQLString,
                resolve: () => 'Hello World'
            }
        })
    })
})

// bind express with graphql
app.use('/graphql', graphqlHTTP({ // [nodemon] app crashed - waiting for file changes before starting
    // schema: schema,
    // graphiql: true
}))

app.listen(5000, () => console.log('now listening for requests on port 5000'))