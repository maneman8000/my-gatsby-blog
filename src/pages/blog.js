import React from 'react'
import { Link, graphql } from 'gatsby'
import { css } from "@emotion/core"
import Card, { CardPrimaryContent } from "@material/react-card";
import {Cell, Grid, Row} from '@material/react-layout-grid';
import Layout from '../components/Layout'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location}>
        <div className="container">
          <Grid>
            <Row>
              <Cell columns={10}>
                {posts.map(({ node }) => {
                  const title = node.fields.title || node.fields.slug
                  return (
                    <Card key={node.fields.slug} css={css`
                      margin: 48px 16px;
                    `}>
                      <Link to={node.fields.slug}>
                        <CardPrimaryContent>
                          <div css={css`padding: 24px;`}>
                            <h5 className="mdc-typography--headline6">
                              {title}
                            </h5>
                            <h6 className="mdc-typography--subtitle2">
                              {node.fields.date}
                            </h6>
                            <div css={css`margin-top: 24px;`}>
                              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                            </div>
                          </div>
                        </CardPrimaryContent>
                      </Link>
                    </Card>
                  )
                })}
              </Cell>
              <Cell columns={2}>
                
              </Cell>
            </Row>
          </Grid>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
          }
        }
      }
    }
  }
`
