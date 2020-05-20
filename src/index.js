import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import { App } from './App';


const client = new ApolloClient({
    uri: 'https://curso-platzi-react-avanzado-h10w64ocw.now.sh/graphql'
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>, 
    document.getElementById("app")
);
