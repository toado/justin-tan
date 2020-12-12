import React, { Component } from 'react'
import sqrtl from '../img/ded_squritle.jpg'
import './content.css'

class Content extends Component {
    render() {
        return (
            <div className="nameHeader" >
                <img className='avatar' src={sqrtl} alt="it's me"></img>

                <div className="nameTitle">
                    <h2 className="intr-text">Hey, I'm </h2>
                    <h1 className="name">justintan</h1>
                </div>
            </div> 
        );
    }
}

export default Content;