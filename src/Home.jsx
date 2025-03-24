import BlogList from "./BlogList";
import useFetch from "./useFetch";

function Home() {
  const { blogs, isPending, error } = useFetch("http://localhost:3000/blogs");

  return (
    <div className="home">
      {isPending && <h1>Loading...</h1>}
      {error && <h2>There was an error fetching blog posts</h2>}
      {blogs && <BlogList blogs={blogs} title={"All Blogs"} />}
    </div>
  );
}

export default Home;
