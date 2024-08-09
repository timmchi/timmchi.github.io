const BookCard = ({ book }) => {
  return (
    <div className="text-center text-stone-200 border-stone-200 border-2 shadow-lg rounded-lg text-sm p-2 hover:scale-105 hover:cursor-pointer">
      <a href={book.link} target="_blank">
        <img
          className="mb-2 border-2 border-teal-700 h-72 w-48 object-cover"
          src={book.image}
          alt={`${book.title} image`}
        />
        <h4 className="font-bold">{book.title}</h4>
        <p>{book.author}</p>
      </a>
    </div>
  );
};

export default BookCard;
