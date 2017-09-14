import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './components/Home';
import FetchData from './components/FetchData';
import Counter from './components/Counter';
import Semaphore from './components/Semaphore';
import Canvas from './components/Canvas';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/counter' component={ Counter } />
    <Route path='/semaphore' component= { Semaphore} />
    <Route path='/fetchdata/:startDateIndex?' component={ FetchData } />
    <Route path='/canvas' component={ Canvas } />
</Layout>;
