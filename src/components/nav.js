import React, { Component } from 'react'
import Resume from '../../documents/resume.pdf'

class Nav extends Component {
    render() {
        return (
            <div className="info">
                <h3 className="link">
                    <a class="links hover" href={Resume}> {">"} resume</a>
                </h3>
            </div>
        );
    }
}

export default Nav;