import React, { Component } from 'react';
import { tween, spring, svg, stagger, easing } from 'popmotion';
import mc from 'material-colors';
import { css } from 'emotion';
import styled from 'react-emotion';

import SEO from '../components/SEO/SEO';
import HomeHero from '../components/Home/HomeHero';
import PostsList from '../components/PostsList/PostsList';
import config from '../../site-config/';
import { fontScheme } from '../helpers/style';


const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
`;

const Subscribe = styled.section`
    grid-column-start: 2;
    grid-column-end: 6;
    background: #fff;
    margin-top: -50px;
    padding: 1em 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
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

const SubscribeForm = styled.div`
    grid-column-start: 2;
    grid-column-end: 5;
    padding: 0 1em;
    border-left: 1px solid ${mc.pink[100]};
    padding: 1em;

    > div {
        display: flex;
        justify-content: center;
    }
`;

const formStyles = css`

    label {
        display: block;
        font-size: 1.125em;
        max-width: 40ch;
        margin: 0 0 1em;
        text-align: center;
        line-height: 1.4;
    }

    input[type=text],
    input[type=email] {
        padding: 0.75em 0.25em;
        font-size: 1.125em;
        border: 1px solid ${mc.blueGrey[900]};
        margin: 0 10px 0 0;
        min-width: 300px;
        &:focus {
            border: 1px solid ${mc.pink[500]};
            outline: none;
        }
    }

    input[type=submit] {
        border: none;
        background: ${mc.pink[500]};
        color: ${mc.grey[200]};
        font-weight: 400;
        padding: 0 2em;
        cursor: pointer;
        font-size: 1.125em;
        transition: all 0.3s ease;
        font-family: ${fontScheme.headings};
        font-weight: 700;

        &:hover {
            background: ${mc.pink[700]};
            color: #fff;
        }
    }
`;

const inputButtonWrap = css`
    display: flex;
`;

const PostExcerpt = styled.article`
    width: 100%;
`;

const iconRSSTween = (icon) => {
    const paths = Array
        .from(icon.children)
        .map(svg);

    const animations = Array(paths.length)
        .fill(spring({
            from: { opacity: 0, scale: 0, fill: 'hsla(187, 100%, 42%, 1)' },
            to: { opacity: 1, scale: 1, fill: 'hsla(340, 82%, 52%, 1)' },
        }));

    const anim = () => {
        stagger(animations, 100)
            .start(v => v.forEach((x, i) => paths[i].set(x)));
    };
    anim();
};

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        iconRSSTween(this.iconRSS);
        // .then(iconRSSTween(this.iconRSS))
        // .catch(err => console.error(err));
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        const { edges } = this.props.data.allMarkdownRemark;
        return (
            <div>
                <SEO />
                <HomeHero />
                <Container>
                    <Subscribe>
                        <SubscribeRSS>
                            <div>
                                <p>Subscribe to our<br />RSS&nbsp;Feed!</p>
                                <svg
                                    id="iconRSS"
                                    xmlnsXlink="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    ref={(iconRSS) => { this.iconRSS = iconRSS; }}
                                >
                                    <circle opacity="0" cx="6.18" cy="17.82" r="2.18" />
                                    <path opacity="0"d="M4,10.1v2.83A7.08,7.08,0,0,1,11.07,20H13.9A9.9,9.9,0,0,0,4,10.1Z" />
                                    <path opacity="0" d="M4,4.44V7.27A12.73,12.73,0,0,1,16.73,20h2.83A15.56,15.56,0,0,0,4,4.44Z" />
                                </svg>
                            </div>
                        </SubscribeRSS>
                        <SubscribeForm>
                            <div className={formStyles} id="mc_embed_signup">
                                <form action="https://cfye.us2.list-manage.com/subscribe/post?u=9017bc446315b0e178f438760&amp;id=b98c426677" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                                    <div id="mc_embed_signup_scroll">
                                        <label htmlFor="mce-EMAIL">Subscribe to the mailing list to get the weekly roundup in your inbox!</label>
                                        <div className={inputButtonWrap}>
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
                                            <input type="submit" value="Subscribe!" name="subscribe" id="mc-embedded-subscribe" className="button" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </SubscribeForm>
                    </Subscribe>
                </Container>
                <Container>
                    <PostsList edges={edges} />
                </Container>
            </div>
        );
    }
}

export default Home;

export const query = graphql`
    query WeeklyArchive {
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
            totalCount
            edges {
                node {
                    ...defaultArchiveQuery
                }
            }
        }
    }
`;
