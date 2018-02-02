import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'react-emotion';

import SEO from '../components/SEO/SEO';
import '../graphql/post';

const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
`;

const BlogPost = props => {
    const { markdownRemark } = props.data;
    const { frontmatter, html } = markdownRemark;
    const { published } = frontmatter;
    return (
        <article>
            <Container>
                <SEO type="post" post={markdownRemark} />
                {!published && (
                    <Helmet>
                        <meta name="robots" content="noindex" />
                    </Helmet>
                )}
                <h1>{frontmatter.title}</h1>
                {/* <Img sizes={frontmatter.cover.childImageSharp.sizes} /> */}
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </Container>
        </article>
    );
};

BlogPost.propTypes = {
    data: PropTypes.object.isRequired,
};

export default BlogPost;

export const query = graphql`
    query BlogPostQuery($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            ...postQuery
        }
    }
`;
