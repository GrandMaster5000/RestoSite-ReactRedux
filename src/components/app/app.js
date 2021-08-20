import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';


import Background from './food-bg.jpg';
import { Route } from 'react-router-dom';

const App = () => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader/>
            <Route exact path='/' component={MainPage}/>
            
            <Route path='/basket' component={CartPage}/>
        </div>
    )
}

export default App;