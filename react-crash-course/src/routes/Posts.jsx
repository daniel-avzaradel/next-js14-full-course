import { Outlet } from "react-router-dom";
import PostsList from "../components/PostList";

function Posts() {
  return (
    <main>
      <Outlet />
      <PostsList />
    </main>
  );
}

export default Posts;
