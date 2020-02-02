import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';
import './index.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faHome, faArrowAltCircleLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faBars, faHome, faArrowAltCircleLeft, faChevronRight);

const Root = () => (
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
