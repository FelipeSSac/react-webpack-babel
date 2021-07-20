import React from 'react';
import PropTypes from 'prop-types';

export default function Post(props) {
  return (
    <>
    <article>
        <strong>{props.title}</strong><br />
        <small>{props.subtitle}</small>
        <br />
        likes: {props.likes}
      </article>
      <br />
    </>
  )
}

Post.PropTypes = {
  likes: PropTypes.number.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
  }).isRequired,
}