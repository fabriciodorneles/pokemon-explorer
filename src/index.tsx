import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import store from './store';

import graphqlClient from './services/graphql';

import App from './App';

ReactDOM.render(
    <ApolloProvider client={graphqlClient}>
        <Provider store={store}>
            <App />
        </Provider>
    </ApolloProvider>,
    document.getElementById('root'),
);
