const BookCard = ({ book }) => {
    return (
        <div className="border border-white border-2 rounded-lg text-sm p-2">
            <img src={book.image} alt={`${book.title} image`} />
            <h4>{book.title}</h4>
            <p>{book.author}</p>
        </div>
    )
}

export default BookCard