import { useState } from "react";
import { books } from "../../data/favoriteBooks";
import BookCard from "./BookCard";

const BookListModal = ({ buttonText }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalAction = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div onClick={() => setIsOpen(!isOpen)}>
      <button
        onClick={handleModalAction}
        className="block text-white bg-teal-700 hover:bg-teal-900 dark:bg-teal-500 dark:hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-lg px-3 py-1.5 text-center"
      >
        {buttonText}
      </button>

      <div
        className={`${
          !isOpen && "hidden"
        } fixed backdrop-blur-sm overflow-y-auto overflow-x-hidden inset-0 z-50 p-8 justify-center items-center w-full md:p-0 md:inset-0 h-[calc(100%-1rem)] max-h-full`}
        tabIndex="-1"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative bg-teal-900 bg-opacity-95 rounded-lg top-[15%] shadow-lg max-w-full max-h-full w-full md:w-11/12 lg:w-1/2 md:top-1/4 md:left-1/4 lg:max-w-7xl dark:border-2 dark:border-stone-200"
        >
          <div className="relative bg-teal-900 bg-opacity-95 rounded-lg shadow-lg">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-slate-400">
              <h3 className="text-xl font-semibold text-stone-200">
                Favorite Books
              </h3>
              <button
                onClick={handleModalAction}
                className="text-gray-400 bg-transparent hover:bg-stone-500 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-16 space-y-4 md:p-4">
              <div className="flex flex-col gap-4 text-lg text-white md:flex-row md:gap-8">
                {books.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookListModal;
