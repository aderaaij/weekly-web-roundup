import React from 'react';
import PropTypes from 'prop-types';
import Link, { navigateTo } from 'gatsby-link';
import styled from 'react-emotion';
import mc from 'material-colors';
import { css } from 'emotion';

const Article = styled.article`
    display: grid;
    display: flex;
    margin: 0 0 2em;
    box-shadow: 
        0 1px 3px rgba(0,0,0,0.12),
        0 1px 2px rgba(0,0,0,0.24);
    transition: box-shadow 0.3s ease;
    cursor: pointer;

    &:hover {
        box-shadow: 
            0 3px 6px rgba(0,0,0,0.16),
            0 3px 6px rgba(0,0,0,0.23);
    }
`;

const articleContent = css`
    padding: 1em;
    max-width: 65ch;

    h2 {
        margin: 0;
        font-size: 2em;
        line-height: 1;

        a {
            text-decoration: none;
        }
    }

    p {
        font-size: 1.125em;
    }
`;

const WeekIcon = styled.div`
    position: relative;
    display: flex;
    max-width: 200px;
    flex-direction: column;
    text-align: center;
    background: ${mc.blueGrey[50]};
`;

const weekStyle = css`
    display: block;
    width: 100%;
    height: 30px;
    background: ${mc.pink[500]};
    color: ${mc.blueGrey[50]};
    text-transform: uppercase;
    line-height: 30px;
    font-weight: 800;
    text-align: center;
`;

const weekNumber = css`
    display: block;
    font-size: 4em;
    line-height: 1;
    font-weight: 800;
    color: ${mc.pink[500]};
    padding: 0.375em 2rem;
`;

/**
 * Funtion to prevent default behaviour when click an A tag.
 * Takes in an event (e) and a string (slug)
 */
function goToPage(e, slug) {
    if (e.target.tagName === 'A') {
        e.preventDefault();
    } else {
        navigateTo(slug);
    }
}

const PostExcerpt = (props) => {
    const {
        tags, date, path, title, excerpt, published,
    } = props.postInfo;
    return (
        <Article onClick={e => goToPage(e, path)}>
            <WeekIcon>
                <span className={weekStyle}>Week</span>
                <span className={weekNumber}>01</span>
            </WeekIcon>
            <div className={articleContent}>
                {!published &&
                <strong>unpublished</strong>
                }
                <h2>
                    <Link to={path}>{title}</Link>
                </h2>
                {/* <span>date: {date}</span> */}
                {/* <Img style={{ width: 250, height: 250 }} resolutions={cover.childImageSharp.resolutions} /> */}
                <p>{excerpt}</p>
                {(tags || date) &&
                <div>
                    {/* <span>category: <Link to={`/categories/${category}`}>{category}</Link></span> */}
                    {/* <div>
                    tags:
                        <ul>{tags.map((tag, i) => (
                            <li key={tag}>
                                <Link to={`/tags/${tag}`}>

                                    <span>{tag}</span>
                                </Link>
                            </li>
                        ))}
                        </ul>
                    </div> */}
                </div>
                }
            </div>
        </Article>
    );
};


PostExcerpt.propTypes = {
    postInfo: PropTypes.object.isRequired,
};

export default PostExcerpt;
