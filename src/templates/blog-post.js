import React from "react"
import gravatar from '../utils/gravatar';
import '../styles/templates/blog-post.css';
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  console.log(post.frontmatter)

  const { title, date, description, author, email, platziUser } = post.frontmatter;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={title}
        description={description || post.excerpt}
      />
      <article>
        <header>
          <h2
            style={{
              marginTop: rhythm(1),
              marginBottom: 8,
            }}
          >
            {title}
          </h2>
          <div className="blogpost__info">
            <div className="blogpost__author">
              <img src={gravatar(email)} alt={author} />
              <h2>
                <a href={`https://platzi.com/@${platziUser}`} target="_blank" rel="noopener noreferrer">
                  {author}
                </a>
              </h2>
            </div>
            <div className="blogpost__date">
              <p>
                {date}
              </p>
            </div>
          </div>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <footer>
        </footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        author
        email
        platziUser
      }
    }
  }
`
