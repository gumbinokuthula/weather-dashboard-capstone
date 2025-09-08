import { useState } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6 w-full max-w-lg"
    >
      <input
        type="text"
        placeholder="Enter a city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-900"
      />
      <button
        type="submit"
        className="px-6 py-2 rounded-md bg-indigo-500 hover:bg-indigo-600 text-white font-medium shadow-md transition-colors"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
