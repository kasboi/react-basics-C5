import { useEffect, useState } from "react";
import BlogList from "./BlogList";

function Home() {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData(url) {
      try {
        const res = await fetch(url);
        const data = await res.json();

        setBlogs(data);
        setIsPending(false);
      } catch (error) {
        setIsPending(false);
        setError(error.message);
      }
    }

    setTimeout(() => {
      fetchData("http://localhost:3000/blogs");
    }, 1000);
  }, []);

  return (
    <div className="home">
      {isPending && <h1>Loading...</h1>}
      {error && <h2>There was an error fetching blog posts</h2>}
      {blogs && <BlogList blogs={blogs} title={"All Blogs"} />}
    </div>
  );
}

export default Home;
