const fs = require('node:fs/promises');

const getPosts = async () => {
  const rawFileContent = await fs.readFile('posts.json', { encoding: 'utf-8' });
  const data = JSON.parse(rawFileContent);
  const storedPosts = data.posts ?? []
  return storedPosts
}

const storePost = async (post) => {
  const existingPosts = await getPosts();
  const addPosts = JSON.stringify({posts: [...existingPosts, post]})
  await fs.writeFile('posts.json', addPosts)
  return addPosts
}

module.exports = {
  getPosts,
  storePost
}