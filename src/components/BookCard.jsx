const BookCard = ({ book }) => {
    return (
        <div>
            <p>{book.title}</p>
            <p>{book.author}</p>
            <img src={book.image} alt={`${book.title} image`} />
        </div>
    )
}