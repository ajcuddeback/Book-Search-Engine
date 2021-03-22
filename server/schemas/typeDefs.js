const { gql } = require('apollo-server-express');

const typeDefs = gql`
    input BookInput {
        bookId: String!
        description: String!
        title: String! 
        image: String!
        link: String!
    }

    type User {
        _id: ID
        username: String
        email: String 
        savedBooks: [Books]
    }

    type Books {
        bookId: String
        description: String
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
        saveBook(input: BookInput): User
        deleteBook(bookId: String!): Books 
    }
`

module.exports = typeDefs;