import React from 'react'
import { Link, graphql } from 'gatsby'
import {Cell, Grid, Row} from '@material/react-layout-grid';
import { css } from "@emotion/core"
import Layout from '../components/Layout'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <div class="container blog-frame">
          <Grid>
            <Row>
              <Cell columns={12} css={css`padding: 16px;`}>
                <h2 className="mdc-typography--headline2">{post.frontmatter.title}</h2>
                <p
                  style={{
                    display: `block`,
                    marginBottom: '24px',
                    marginTop: '24px',
                  }}
                >
                  {post.frontmatter.date}
                </p>
                <div className="blog-content" dangerouslySetInnerHTML={{ __html: post.html }} />
                <hr
                  style={{
                    marginBottom: '8px',
                  }}
                />
                <Grid>
                  <Row>
                    <Cell columns={4}>
                      {previous && (
                        <Link className="mdc-button" to={previous.fields.slug} rel="prev">
                          ← {previous.frontmatter.title}
                        </Link>
                      )}
                    </Cell>
                    <Cell columns={4}>
                    </Cell>
                    <Cell columns={4}>
                      {next && (
                        <Link className="mdc-button" to={next.fields.slug} rel="next">
                          {next.frontmatter.title} →
                        </Link>
                      )}
                    </Cell>
                  </Row>
                </Grid>
              </Cell>
            </Row>
          </Grid>
        </div>        
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
