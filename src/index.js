import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Admin from './components/Admin';
import Mycart from './components/Mycart';
import Myproduct from './components/Myproduct'
import NotFound from './components/NotFound'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Root = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route exact path='/adminSecretPlace' component={Admin} />
            <Route path='/cart/:id' component={Mycart} />
            <Route path='/products/:product' component={Myproduct} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)


ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
