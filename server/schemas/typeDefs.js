const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String 
        savedBooks: [Books]
    }

    type Books {
        _id: ID
        authors: String
        description: String
        bookId: String
        image: String 
        link: String
        title: String 
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(bookId: String!, authors: String!, description: String!, title: String!, image: String!): Books
        deleteBook(bookId: String!): Books 
    }
`