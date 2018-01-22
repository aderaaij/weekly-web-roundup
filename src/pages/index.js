import React, { Component } from 'react';
import { tween, svg, easing } from 'popmotion';
import mc from 'material-colors';

import styled from 'react-emotion';
import SEO from '../components/SEO/SEO';
import config from '../../site-config/';

const Hero = styled.div`
    height: 60vh;
    min-height: 400px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);

    svg {
        display: block;
        margin: 0 auto 1em;
    }
`;

const HeroHeader = styled.header`
     grid-column-start: 2;
     grid-column-end: 6;
     justify-self: center;
     align-self: center;
`;

const HeroTitleWrap = styled.header`

    h1 {
        font-size: 5em;
        letter-spacing: -1px;
        margin: 0 auto;        
        text-align: center;
    }

    p {
        font-family: sans-serif;
        font-size: 1.5em;
        max-width: 700px;
        margin: 1em auto;
        text-align: center;
        line-height: 1.4;
        color: ${mc.grey[700]};
    }
`;

const homeLogoTween = (logo) => {
    const path = logo.querySelector('path');
    const pathStyler = svg(path);
    const logoTween = tween({
        from: {
            'stroke-dashoffset': -330,
            stroke: 'hsla(187, 100%, 42%, 1)',
        },
        to: {
            'stroke-dashoffset': 0,
            stroke: 'hsla(340, 82%, 52%, 1)',
        },
        duration: 1200,
        ease: easing.easeOut,
    });
    logoTween.start((v) => {
        pathStyler.set(v);
    });
};

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        homeLogoTween(this.heroLogo);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div>
                <SEO />
                <Hero>
                    <HeroHeader>
                        
                        <svg
                            id="wwrup"
                            width="150"
                            xmlnsXlink="http://www.w3.org/2000/svg"
                            viewBox="0 0 79 79.09"
                            ref={(heroLogo) => { this.heroLogo = heroLogo; }}
                        >
                            <path
                                transform="translate(-5.5 -5.5)"
                                fill="none"
                                stroke="currentColor"
                                strokeMiterlimit={10}
                                strokeWidth={5}
                                style={{ strokeDasharray: 330 }}
                                d="M63,43.1,47.35,24.2a3,3,0,0,0-1.45-1,2.9,2.9,0,0,0-1.7,0,3.56,3.56,0,0,0-1.45.95l-15.7,18.9a3.09,3.09,0,0,0-.7,2.1,3,3,0,0,0,.95,2,2.79,2.79,0,0,0,2.05.85H42V81.9A35.59,35.59,0,0,1,18.85,71.15,35.55,35.55,0,0,1,8,45,35.71,35.71,0,0,1,18.85,18.8,35.72,35.72,0,0,1,45,8,35.62,35.62,0,0,1,71.15,18.8,35.71,35.71,0,0,1,82,45,35.55,35.55,0,0,1,71.15,71.15,35.87,35.87,0,0,1,65.3,76"
                            />
                        </svg>
                        
                        <HeroTitleWrap>
                            <h1>Weekly Web Roundup</h1>
                            <p>A free, weekly curated web digest delivering you the best articles on web development</p>
                        </HeroTitleWrap>
                    </HeroHeader>
                </Hero>
                <p>{config.meta.siteDescription}</p>
                <div id="mc_embed_signup">
                    <form action="https://cfye.us2.list-manage.com/subscribe/post?u=9017bc446315b0e178f438760&amp;id=b98c426677" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                        <div id="mc_embed_signup_scroll">
                            <label htmlFor="mce-EMAIL">Subscribe to our mailing list</label>
                            <input
                                type="email"
                                name="EMAIL"
                                className="email"
                                id="mce-EMAIL"
                                placeholder="email address"
                                value={this.state.value}
                                onChange={this.handleChange}
                                required
                            />
                            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden>
                                <input type="text" name="b_9017bc446315b0e178f438760_b98c426677" tabIndex="-1" value="" />
                            </div>
                            <div className="clear">
                                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Home;
