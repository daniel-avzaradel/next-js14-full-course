import React from 'react'
import Post from './Post'
import classes from './Post.module.css'

const PostList = () => {
  return (
    <div className={classes.posts}>
    <Post name="Daniel Avzaradel" />
    <Post name="David Avzaradel" />
    </div>
  )
}

export default PostList