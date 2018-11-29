import React, { Component } from 'react';
import Aside from '../layouts/aside';
import Header from '../layouts/header';
import * as math from '@utils/math';

import './index.scss';

class App extends Component {
    componentDidMount() {
        console.log('123');
        console.log(math.cube(3));
    }
    render() {
        return (
            <div className="app">
                <Aside />
                <Header />
            </div>
        );
    }
}

export default App;