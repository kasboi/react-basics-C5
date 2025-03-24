import { useEffect, useState } from "react";

function useFetch(url) {
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
      fetchData(url);
    }, 1000);
  }, []);

  return { blogs, isPending, error };
}

export default useFetch;
