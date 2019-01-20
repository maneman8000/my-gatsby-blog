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
      <Layout>
        <div class="container">
          <Grid>
            <Row>
              <Cell columns={10}>
                {posts.map(({ node }) => {
                  const title = node.frontmatter.title || node.fields.slug
                  return (
                    <Card key={node.fields.slug} css={css`
                      margin: 48px 16px;
                    `}>
                      <Link to={node.fields.slug}>
                        <CardPrimaryContent>
                          <div css={css`padding: 24px;`}>
                            <h6 className="mdc-typography--headline6">
                              {title}
                            </h6>
                            <h7 className="mdc-typography--subtitle2">
                              {node.frontmatter.date}
                            </h7>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
