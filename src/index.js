import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './styles/main.scss'
import store from './redux/store'
import Root from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import {IntlProvider, FormattedMessage} from 'react-intl';
import messages from './localization/messages';

const rootElement = document.getElementById('root');

const locale = 'is-IS';

ReactDOM.render(
<IntlProvider locale={locale} messages={messages[locale]}><Root store={store}/></IntlProvider>, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
