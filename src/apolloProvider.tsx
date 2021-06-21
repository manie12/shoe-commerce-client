import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const httpLink = createHttpLink({
    uri: "https://shoe-ecommerce.herokuapp.com/"
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

export default (
    <React.StrictMode>


        <ApolloProvider client={client}>
            <BrowserRouter>
                <App />

            </BrowserRouter>


        </ApolloProvider>

    </React.StrictMode>


)