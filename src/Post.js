import React from 'react';
import PropTypes from 'prop-types';

export default function Post(props) {
  return (
    <>
    <article>
        <strong>
          {
            props.post.read ? 
              <s>{props.post.title}</s>
            :
              props.post.title
          }
        </strong><br />
        <small>{props.post.subtitle}</small>
        <br />
        <button onClick={() => props.onRemove(props.post.id)}>remover</button>
        likes: {props.post.likes}
      </article>
      <br />
    </>
  )
}

Post.PropTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired
  }).isRequired,
}