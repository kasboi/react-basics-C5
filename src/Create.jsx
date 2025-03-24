import { useState } from "react";
import { useNavigate } from "react-router";

function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const blog = { title, body, author };

    await fetch("http://localhost:3000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    });

    navigate("/");
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="">Blog Body:</label>
        <textarea
          type="text"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <select
          value={author}
          required
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="" disabled>
            Please select an author
          </option>
          <option value="mario">Mario</option>
          <option value="luigi">Luigi</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
}

export default Create;
