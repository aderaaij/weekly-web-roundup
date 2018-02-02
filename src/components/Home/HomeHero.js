import React, { Component } from 'react';
import styled from 'react-emotion';
import mc from 'material-colors';
import { tween, svg, easing, stagger, styler } from 'popmotion';
import { css } from 'emotion';

const Hero = styled.div`
    height: 60vh;
    min-height: 400px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    background: ${mc.blueGrey[50]};

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

const heroTitleWrapStyle = css`

    h1 {
        font-size: 5em;
        letter-spacing: -1px;
        margin: 0 auto;        
        text-align: center;
        opacity: 0;
    }

    p {
        font-size: 1.5em;
        max-width: 700px;
        margin: 1em auto;
        opacity: 0;
        text-align: center;
        line-height: 1.4;
        color: ${mc.blueGrey[900]};
    }
`;

const homeLogoTween = logo => new Promise((resolve, reject) => {
    if (logo.tagName && logo.tagName.toLowerCase() === 'svg') {
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
            ease: easing.easeInOut,
        });
        logoTween.start({
            update: (v) => {
                pathStyler.set(v);
            },
            complete: () => {
                console.log('complete');
                resolve();
            },
        });
    } else {
        reject(Error('Please pass a valid SVG element'));
    }
});

const homeTitlesTween = (heroTitleWrap) => {
    const titles = Array
        .from(heroTitleWrap.childNodes)
        .map(styler);
    const animations = Array(titles.length)
        .fill(tween({
            from: { opacity: 0, y: 50 },
            to: { opacity: 1, y: 0 },
            ease: easing.backOut,
        }));
    const anim = () => {
        stagger(animations, 300)
            .start(v => v.forEach((x, i) => titles[i].set(x)));
    };
    return anim;
};

class HomeHero extends Component {
    componentDidMount() {
        homeLogoTween(this.heroLogo)
            .then(homeTitlesTween(this.heroTitleWrap))
            .catch(err => console.log(err));
    }
    render() {
        console.log(this.props);
        return (
            <Hero>
                <HeroHeader>
                    <svg
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
                    <div className={heroTitleWrapStyle} ref={(heroTitleWrap) => { this.heroTitleWrap = heroTitleWrap; }}>
                        <h1>Weekly Web Roundup</h1>
                        <p>A free, weekly curated web digest delivering you the best articles on web development</p>
                    </div>
                </HeroHeader>
            </Hero>
        );
    }
}

export default HomeHero;
