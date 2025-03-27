import { useNavigate, useParams } from "react-router";
import useFetch from "./useFetch";

function BlogDetails() {
  const { id } = useParams();
  const { blogs, isPending, error } = useFetch(
    `http://localhost:3000/blogs/${id}`,
  );

  const navigate = useNavigate();

  const handleDelete = async () => {
    await fetch(`http://localhost:3000/blogs/${id}`, {
      method: "DELETE",
    });

    navigate("/");
  };
  return (
    <div className="blog-details">
      {isPending && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {blogs && (
        <article>
          <h2>{blogs.title}</h2>
          <p>Written by {blogs.author}</p>
          <div>{blogs.body}</div>
          <button onClick={handleDelete}>delete</button>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
