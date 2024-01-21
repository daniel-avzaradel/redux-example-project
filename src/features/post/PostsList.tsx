import { useSelector } from "react-redux";
import { selectAllPost } from "./postSlice";
import "./postlist.css";
import AddPostForm from "./AddPostForm";

const PostsList = () => {
  const posts = useSelector(selectAllPost);

  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title.toUpperCase()}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ));

  return (
    <section className="posts">
      <h2>POSTS</h2>
      {renderedPosts}
      <br />
      <AddPostForm />
    </section>
  );
};

export default PostsList;
