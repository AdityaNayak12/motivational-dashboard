import QuoteCard from "./components/QuoteCard";
import Controls from "./components/Controls";
import LikedQuotes from "./components/LikedQuotes";
import useQuotes from "./hooks/useQuotes";
import "./App.css";

function App() {
  const {
    quote,
    author,
    loading,
    likedQuotes,
    setLikedQuotes,
    fetchQuote,
  } = useQuotes();

  return (
    <div className="container">
      <h1 className="title">🌞 Daily Motivation</h1>

      <QuoteCard quote={quote} author={author} loading={loading} />

      <Controls
        fetchQuote={fetchQuote}
        quote={quote}
        author={author}
        likedQuotes={likedQuotes}
        setLikedQuotes={setLikedQuotes}
        loading={loading}
      />

      <LikedQuotes likedQuotes={likedQuotes} />
    </div>
  );
}

export default App;