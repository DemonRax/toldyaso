// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { GlobalProvider } from './globals';

import { rootReducer } from './reducers/RootReducer';
import { App } from './components/App';

export const init = () => {
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
    const document = GlobalProvider.getDocument();
    const root = document && document.getElementById('root');

    root &&
        ReactDOM.render(
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={App} />
                    </Switch>
                </BrowserRouter>
            </Provider>,
            root
        );
};

init();
