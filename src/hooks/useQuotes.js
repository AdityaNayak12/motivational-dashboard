import { useEffect, useState } from "react";

export default function useQuotes() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);
  const [likedQuotes, setLikedQuotes] = useState([]);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://dummyjson.com/quotes/random");
      const data = await res.json();

      setQuote(data.quote || "No quote available");
      setAuthor(data.author || "Unknown");
    } catch (err) {
      console.log(err);
      setQuote("Failed to fetch quote");
      setAuthor("");
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchQuote();
  }, []);

  return {
    quote,
    author,
    loading,
    likedQuotes,
    setLikedQuotes,
    fetchQuote,
  };
}