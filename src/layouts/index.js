import React from 'react';
import PropTypes from 'prop-types';
import { injectGlobal } from 'emotion';
import mc from 'material-colors';
import 'normalize.css';

import Head from '../components/Head/Head';
import { fontScheme, colorScheme } from '../helpers/style';

injectGlobal`
    * {
        box-sizing: border-box;
    }

    body {
        font-family: ${fontScheme.headings};
        background: white;
        border-top: 6px solid ${colorScheme.support}
        color: ${mc.blueGrey[800]};
    }
    
    h1, h2, h3, h4, h5, h6 {
        font-family: ${fontScheme.headings};
        font-weight: 900;
        letter-spacing: -0.5px;
        color: ${colorScheme.support};
    }

    a {
        color: ${colorScheme.support};
    }

    p {
        line-height: 1.55;
    }
`;

const TemplateWrapper = ({ children }) => (
    <div>
        <Head />
        {/* <h1><Link to="/">{config.meta.siteTitle}</Link></h1>
        <nav>
            <ul>
                <li><Link to="/posts">Posts</Link></li>
            </ul>
        </nav> */}
        {children()}
    </div>
);

export default TemplateWrapper;

TemplateWrapper.propTypes = {
    children: PropTypes.func.isRequired,
};
