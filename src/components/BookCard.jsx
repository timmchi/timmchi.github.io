const BookCard = ({ book }) => {
    return (
        <div>
            <img src={book.image} alt={`${book.title} image`} />
            <h4>{book.title}</h4>
            <p>{book.author}</p>
        </div>
    )
}

export default BookCard