import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { configureStore, histore } from './store/configureStore';

import Signin from './containers/signin';

const store = configureStore();

render(
<AppContainer>
<Provider store={store}>
    <Signin />
    </Provider>
    </AppContainer>,
document.getElementById('js-signin')
);

if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        const NextRoot = require('./containers/Root'); // eslint-disable-line global-require
        render(
        <AppContainer>
        <Provider store={store}>
            <Signin />
            </Provider>
            </AppContainer>,
        document.getElementById('js-signin')
    );
    });
}
