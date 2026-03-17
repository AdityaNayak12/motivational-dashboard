function Controls({ fetchQuote, quote, author, likedQuotes, setLikedQuotes, loading }) {
    const isLiked = likedQuotes.find(q => q.quote === quote);

    const handleLike = () => {
        if (!quote) return;

        if (isLiked) {
            setLikedQuotes(likedQuotes.filter(q => q.quote !== quote));
        } else {
            setLikedQuotes([...likedQuotes, { quote, author }]);
        }
    };

    return (
        <div className="buttons">
            <button
                onClick={fetchQuote}
                disabled={loading}
                className="new-btn"
            >
                New Quote
            </button>

            <button
                onClick={handleLike}
                disabled={!quote}
                className="like-btn"
            >
                {isLiked ? "❤️ Liked" : "🤍 Like"}
            </button>

            <p>Liked: {likedQuotes.length}</p>
        </div>
    );
}

export default Controls;