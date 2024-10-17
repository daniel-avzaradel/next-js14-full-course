import React from 'react';
import './Post.css'

const Post = ({name}) => {

  return (
    <div className='post'>
      <p>Hello, <span>{name}</span></p>
      <p>React.js is awesome!</p>
    </div>
  )
}

export default Post