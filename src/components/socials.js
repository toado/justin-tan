import React, { Component } from 'react'
import Octo from '../img/GitHub-Mark-32px.png'


class Socials extends Component {
    render() {
        return (
            <footer className="socials">
                <span className="social-item">
                    <a href="https://github.com/toado" rel="noopener noreferrer" target="_blank">
                        <img src={ Octo } alt="GitHub Octo"></img>
                    </a>
                </span>
                <span className="social-item">
                    <a href="https://www.linkedin.com/in/justintan-/" rel="noopener noreferrer" target="_blank">
                        <img src={ Octo } alt="LinkedIn"></img>
                    </a>
                </span>
                <span className="social-item">
                    <a href="https://github.com/toado" rel="noopener noreferrer" target="_blank">
                        <img src={ Octo } alt="GitHub Octo"></img>
                    </a>
                </span>
            </footer>
        );
    }   
}

export default Socials;