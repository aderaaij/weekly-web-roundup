import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { css } from 'emotion';
import { spring, svg, tween, easing, stagger, styler } from 'popmotion';

import SubscribeForm from './SubscribeForm';

const subscribeWrapStyles = css`
    grid-column-start: 2;
    grid-column-end: 6;
    background: #fff;
    margin: -50px 0 4em 0;
    padding: 1em 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    opacity: 0;
`;

const SubscribeRSS = styled.div`
    grid-column-start: 1;
    grid-column-end: 2;
    align-self: center;
    justify-self: center;
    padding: 1em;

    p {
        margin: 0;
        font-size: 1.125em;
        text-align: center;
        line-height: 1.4;
    }

    svg {
        width: 125px;
        display: block;
        margin: 0 auto;
    }
`;

const subscribeFadeIn = tween({
    from: { opacity: 0, scale: 0.75 },
    to: { opacity: 1, scale: 1 },
    duration: 400,
    ease: easing.backOut,
});

const iconRSSTween = icon => {
    const paths = Array.from(icon.children).map(svg);

    const animations = Array(paths.length).fill(
        spring({
            from: { opacity: 0, scale: 0, fill: 'hsla(187, 100%, 42%, 1)' },
            to: { opacity: 1, scale: 1, fill: 'hsla(340, 82%, 52%, 1)' },
        })
    );

    const anim = () => {
        stagger(animations, 100).start(v =>
            v.forEach((x, i) => paths[i].set(x))
        );
    };
    anim();
};

export default class Subscribe extends Component {
    componentDidMount() {
        styler(this.subscribeWrap).set({ opacity: 0, scale: 0.8 });
    }

    componentDidUpdate() {
        subscribeFadeIn.start({
            update: x => styler(this.subscribeWrap).set(x),
            complete: () => iconRSSTween(this.iconRSS),
        });
    }

    render() {
        return (
            <div
                className={subscribeWrapStyles}
                ref={subscribeWrap => {
                    this.subscribeWrap = subscribeWrap;
                }}
            >
                <SubscribeRSS>
                    <div>
                        <p>
                            Subscribe to our<br />RSS&nbsp;Feed!
                        </p>
                        <svg
                            id="iconRSS"
                            xmlnsXlink="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            ref={iconRSS => {
                                this.iconRSS = iconRSS;
                            }}
                        >
                            <circle opacity="0" cx="6.18" cy="17.82" r="2.18" />
                            <path
                                opacity="0"
                                d="M4,10.1v2.83A7.08,7.08,0,0,1,11.07,20H13.9A9.9,9.9,0,0,0,4,10.1Z"
                            />
                            <path
                                opacity="0"
                                d="M4,4.44V7.27A12.73,12.73,0,0,1,16.73,20h2.83A15.56,15.56,0,0,0,4,4.44Z"
                            />
                        </svg>
                    </div>
                </SubscribeRSS>
                <SubscribeForm />
            </div>
        );
    }
}
