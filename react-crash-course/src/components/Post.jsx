import React from 'react';
import classes from './Post.module.css'

const Post = ({name}) => {

  return (
    <div className={classes.post}>
      <span>{name}</span>
      <p>React.js is awesome!</p>
    </div>
  )
}

export default Post