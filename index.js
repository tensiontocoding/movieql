import {createServer} from "@graphql-yoga/node";
import resolvers from "./graphql/resolvers.js";
import {importSchema} from 'graphql-import';

const typeDefs = importSchema('./graphql/schema.graphql')

const server = new createServer({
    schema:{
        typeDefs,
        resolvers,
    }
});

server.start(()=>console.log("Graphql Server Running"));