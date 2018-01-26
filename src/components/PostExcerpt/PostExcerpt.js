import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Link, { navigateTo } from 'gatsby-link';
import styled from 'react-emotion';
import mc from 'material-colors';
import { css } from 'emotion';

const Article = styled.article`
    display: grid;
    display: flex;
`;

const WeekIcon = styled.div`
    position: relative;
    display: flex;
    height: 100%;
    width: 200px;
    flex-direction: column;
    text-align: center;
`;

const articleContent = css`
    padding: 0 1em;

    h2 {
        margin: 0;
        font-size: 2em;
        line-height: 1;

        a {
            text-decoration: none;
        }
    }
`;

const weekStyle = css`
    display: block;
    width: 100%;
    height: 30px;
    background: ${mc.pink[500]};
    color: #fff;
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
    padding: 0.375em 0;
`;

const PostExcerpt = (props) => {
    const {
        tags, date, path, title, category, excerpt, published, cover,
    } = props.postInfo;
    return (
        <Article style={{ margin: '40px 0', paddingBottom: 20, borderBottom: '1px solid #999' }}>
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
