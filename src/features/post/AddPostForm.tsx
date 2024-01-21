import React, { useState } from "react";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);
  const contentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value);
  return (
    <section className="add-post-form">
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={titleChange}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={contentChange}
          rows={8}
        />
        <button type="button">Save Post</button>
      </form>
    </section>
  );
};

export default AddPostForm;
