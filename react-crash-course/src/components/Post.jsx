import React from 'react';
import classes from './Post.module.css'

const Post = ({name}) => {

  return (
    <div className={classes.post}>
      <p>Hello, <span>{name}</span></p>
      <p>React.js is awesome!</p>
    </div>
  )
}

export default Post