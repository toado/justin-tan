import React, { Component } from 'react'

import Content from './content'
import About from './about'
import Nav from './nav'

class Main extends Component {
    render() {
        return (
            <div className="view">
                <div className="pad"/>

                    <div className="main">
                        <Content/>
                        <About/>
                        <Nav/>
                    </div>

                <div className="pad"/>
            </div>
        );
    }
}

export default Main;