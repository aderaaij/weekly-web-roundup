import React, { Component } from 'react';
import SEO from '../components/SEO/SEO';
import config from '../../site-config/';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <div>
                <SEO />
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
