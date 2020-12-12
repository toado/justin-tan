import React, { Component } from 'react'

class About extends Component {
    render() {
        return (
            <div className="about">
                <p>
                    I'm a Computer Science student at the University of Alberta
                    <span class="emoji" role="img" aria-label="wave"> 👋 </span>
                    <br/>I've interned at 
                    <a class="about-text hover"href="https://novamt.com/" target="_blank" rel="noopener noreferrer"> Nova Medical Testing Inc. </a>
                    as a Software Engineer!
                </p>

                <p>
                    Another cool thing that I was up to this year was being a research assistant under the supervision of 
                    <a class="about-text hover"href="http://guzdial.com/" target="_blank" rel="noopener noreferrer"> Matthew Guzdial </a> 
                    at the University of Alberta where the focus was on game content generation through co-creative 
                    collaboration between humans and AI.
                </p>

                <p>
                    I love all things dev as it allows me to express my creativity through code and would love to learn more about 
                    distributed systems and cloud infrastructure 
                    <span class="emoji" role="img" aria-label="cloud"> ☁️ </span>
                </p>

                <p>
                    When I'm not sitting in front of a computer, you can find me bouldering or searching for new recipes to cook / bake 
                    <span class="emoji" role="img" aria-label="bento-box"> 🍱 </span>
                </p>
            </div>
        );
    }
}

export default About;