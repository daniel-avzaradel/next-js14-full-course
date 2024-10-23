const fs = require('node:fs/promises');

const getPosts = async () => {
  const readRawFile = await fs.readFile('posts.json', { encoding: 'utf-8' });
  const data = JSON.parse(readRawFile);
  const storedPosts = data.posts ?? []
  return storedPosts
}

const storePost = async (post) => {
  const existingPosts = await getPosts();
  const addPosts = [...existingPosts, post]
  await fs.writeFile('posts.json', addPosts)
  return addPosts
}

module.exports = {
  getPosts,
  storePost
}