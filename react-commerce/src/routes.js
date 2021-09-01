import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home/index';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/home" exact component={Home}/>
            </Switch>
        </BrowserRouter>
    );
}