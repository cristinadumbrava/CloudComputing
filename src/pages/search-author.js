// 'use client';
import { useState } from "react";
import { searchBooksByAuthor } from "../../utils/recordsFunctions";


const SearchAuthor = () => {
    const [author, setAuthor] = useState("");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);
  
    const handleSearch = async () => {
      if (!author.trim()) return;
      setLoading(true);
      const results = await searchBooksByAuthor(author);
      const booksWithImages = results.filter(
        (book) => book.volumeInfo?.imageLinks?.thumbnail
      );
      setBooks(booksWithImages);
      setLoading(false);
      setSelectedBook(null);
    };
  
    return (
      <div className="p-6 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 mt-10 text-center italic">Search Books by Author</h1>
  
        <div className="flex justify-center gap-3 mb-10">
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter author name"
            className="border border-gray-300 rounded px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </div>
  
        {books.length === 0 && !loading && (
          <p className="text-center text-gray-500">No books found. Try another author.</p>
        )}
  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {books.map((book) => {
            const info = book.volumeInfo;
            return (
              <div
                key={book.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex flex-col"
              >
                {info.imageLinks?.thumbnail && (
                  <img
                    src={info.imageLinks.thumbnail}
                    alt={info.title}
                    className="mx-auto mb-3 max-h-48 object-contain"
                  />
                )}
                <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                  {info.authors ? info.authors.join(", ") : "Unknown author"}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-400 flex-grow">
                  {info.description
                    ? info.description.length > 100
                      ? info.description.slice(0, 100) + "..."
                      : info.description
                    : "No description available."}
                </p>

                {info.infoLink && (
                <a
                href={info.infoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline mt-1 block"
                >
                    Details on Google Books
                </a>
                )}

                <button
                  onClick={() => setSelectedBook(info)}
                  className="mt-3 bg-blue-500 text-white py-1.5 rounded hover:bg-blue-600 transition"
                >
                  Show More
                </button>
              </div>
            );
          })}
        </div>
  
        {/* Popup modal */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300
            ${selectedBook ? "opacity-100 visible" : "opacity-0 invisible"}`}
          onClick={() => setSelectedBook(null)}
        >
          <div
            className="bg-white dark:bg-gray-900 max-w-lg w-full p-6 rounded shadow-lg relative max-h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedBook(null)}
              className="absolute top-3 right-3 text-gray-700 dark:text-gray-300 text-2xl font-bold hover:text-red-500"
              aria-label="Close modal"
            >
              &times;
            </button>
  
            {/* Imagine carte */}
            {selectedBook?.imageLinks?.thumbnail && (
              <img
                src={selectedBook.imageLinks.thumbnail}
                alt={selectedBook.title}
                className="mx-auto mb-4 max-h-60 object-contain"
              />
            )}
  
            <h2 className="text-2xl font-bold mb-4">{selectedBook?.title}</h2>
  
            {/* Container cu scroll pentru descriere */}
            <div className="overflow-y-auto max-h-[40vh] text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
              {selectedBook?.description || "No description available."}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default SearchAuthor;
