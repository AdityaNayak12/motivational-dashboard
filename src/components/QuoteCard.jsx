function QuoteCard({ quote, author, loading }) {
    return (
        <div className="card">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    {quote ? `"${quote}"` : "No quote available"}
                    <p className="author">- {author}</p>
                </>
            )}
        </div>
    );
}

export default QuoteCard;