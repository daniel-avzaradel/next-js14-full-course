const fs = require('node:fs/promises')

const getPosts = async () => {
  const rawFileContent = await fs.readFile('./posts.json', { encoding: 'utf8' })
  const data = JSON.parse(rawFileContent)
  const storedPosts = data.posts ?? []
  return storedPosts
}

const addPost = (posts) => {
  return fs.writeFile('posts.json', JSON.stringify({ posts: posts || [] }));
}

module.exports = {
  getPosts,
  addPost
}