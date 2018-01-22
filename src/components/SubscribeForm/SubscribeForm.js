import React, { Component } from 'react';
import styled from 'react-emotion';
import { css } from 'emotion';
import mc from 'material-colors';

import { fontScheme } from '../../helpers/style';

const FormWrapper = styled.div`
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

const actionURL = 'https://cfye.us2.list-manage.com/subscribe/post?u=9017bc446315b0e178f438760&amp;id=b98c426677';

export default class SubscribeForm extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <FormWrapper>
                <div className={formStyles} id="mc_embed_signup">
                    <form
                        action={actionURL}
                        method="post"
                        id="mc-embedded-subscribe-form"
                        name="mc-embedded-subscribe-form"
                        className="validate"
                        target="_blank"
                        noValidate
                    >
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
            </FormWrapper>
        );
    }
}
