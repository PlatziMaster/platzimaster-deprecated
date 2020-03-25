import React, { useState } from "react";
import gravatar from '../utils/gravatar';
import '../styles/templates/blog-post.css';
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { rhythm } from "../utils/typography";

import shareIcon from "../../assets/shareIcon.png";
import twitterIcon from "../../assets/twitterIcon.svg";
import facebookIcon from "../../assets/facebookIcon.png";
import copylinkIcon from "../../assets/copylinkIcon.png";

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const [modal, setModal] = useState(false);

  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;
  const { title, date, description, author, email, platziUser } = post.frontmatter;
  const url_post = window.location.href;

  const handleShare = () => {
    if (navigator.share !== undefined) {
      navigator.share({
        title: title,
        text: description,
        url: url_post
      })
        .then(() => console.log('Compartido'))
        .catch(error => console.log('Error al compartir', error));
    } else {
      setModal(!modal);
    }
  };

  const copyLink = () => {
    url_post.toString();
    navigator.clipboard.writeText(url_post).then(function () {
      alert(`Enlace: ${url_post} Copiado`);
    }, function () {
      alert("Error al copiar enlace");
    });
  };

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
      <div className="blogpost__share">
        <button onClick={handleShare}>
          <img src={shareIcon} alt="Share Icon" />
          <p>Compartir</p>
        </button>
        {
          modal &&
          <>
            <div className="blogpost__share-modal">
              <a
                href={`https://twitter.com/intent/tweet?url=${url_post}&text=${title}`}
                target="_blank"
                rel="noopener noreferrer"
                data-show-count="false"
              >
                <img
                  src={twitterIcon}
                  alt="Twitter"
                />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${url_post}&display=popup`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={facebookIcon}
                  alt="Facebook"
                />
              </a>
              <img
                src={copylinkIcon}
                alt="Copy Link"
                onClick={copyLink}
              />
            </div>
            <span className="blogpost__share-modalsquare"></span>
          </>
        }
      </div>
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
  );
};

export default BlogPostTemplate;

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
`;
