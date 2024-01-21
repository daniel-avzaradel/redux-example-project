import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";

const PostsList = () => {
  const posts = useSelector((state: RootState) => state.posts);
  const dispatch = useDispatch();

  const renderedPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
