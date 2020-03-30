import React from 'react';
import '../styles/components/search.css'

const Search = ({ posts, filterHandler }) => {

  const onChangeHandler = event => {
    const value = event.target.value.toUpperCase()
    const filtered = posts.filter(({ node }) => {
      const title = node.frontmatter.title || node.fields.slug
      return title.toUpperCase().includes(value)
    })
    filterHandler(filtered)
  }

  return (
    <input
      className="search"
      placeholder="Encuentra un artículo..."
      onChange={onChangeHandler}
    />
  );
}

export default Search;