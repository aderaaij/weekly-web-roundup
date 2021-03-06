import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import SEO from '../components/SEO/SEO';
import HomeHero from '../components/Home/HomeHero';
import Subscribe from '../components/Subscribe/Subscribe';
import PostsList from '../components/PostsList/PostsList';

const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
`;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heroLoaded: false,
        };
    }

    componentDidMount() {}

    onHeaderComplete = () => {
        this.setState({
            heroLoaded: true,
        });
    };

    render() {
        const { edges } = this.props.data.allMarkdownRemark;
        const { heroLoaded } = this.state;
        return (
            <div>
                <SEO />
                <HomeHero onHeaderComplete={this.onHeaderComplete} />
                <Container>
                    <Subscribe heroLoaded={heroLoaded} />
                </Container>
                <Container>
                    <PostsList edges={edges} />
                </Container>
            </div>
        );
    }
}

export default Home;

Home.propTypes = {
    data: PropTypes.object.isRequired,
};

export const query = graphql`
    query WeeklyArchive {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            totalCount
            edges {
                node {
                    ...defaultArchiveQuery
                }
            }
        }
    }
`;
