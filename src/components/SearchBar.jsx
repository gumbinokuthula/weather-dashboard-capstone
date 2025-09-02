import { useState } from "react";

function SearchBar({ onSearch }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      onSearch(input);
      setInput("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city name..."
        className="px-4 py-2 rounded-l-lg text-black"
      />
      <button
        type="submit"
        className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-r-lg font-bold"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
