function LikedQuotes({ likedQuotes }) {
    return (
        <div className="liked-section">
            <h2>❤️ Your Liked Quotes</h2>

            {likedQuotes.length === 0 ? (
                <p>No liked quotes yet</p>
            ) : (
                likedQuotes.map((q, index) => (
                    <div key={index} className="liked-card">
                        <p>"{q.quote}"</p>
                        <small>- {q.author}</small>
                    </div>
                ))
            )}
        </div>
    );
}

export default LikedQuotes;