import React from 'react';
import { useSearchStore } from '../store/useSearchStore';

const AnimatedSearch:React.FC = () => {
    const { isSearchExpanded, toggleSearch, setSearchExpanded } = useSearchStore();

     // Optionally, you can set a timeout to collapse the search bar after a delay (useful for closing the search after a click outside)
  useEffect(() => {
    if (isSearchExpanded) {
      // When the search is expanded, set focus to the input
      const timeout = setTimeout(() => setSearchExpanded(false), 5000); // Example: auto collapse after 5 seconds
      return () => clearTimeout(timeout);
    }
  }, [isSearchExpanded, setSearchExpanded]);
  return (
    <>
       <div className="relative">
      {/* Search Icon Button (trigger for expanding/collapsing search) */}
      <button
        onClick={toggleSearch}
        className="text-white p-2 rounded-full bg-blue-500 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-search"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="16" y1="16" x2="20" y2="20"></line>
        </svg>
      </button>

      {/* Animated Search Bar */}
      <motion.div
        initial={{ width: 0, opacity: 0 }} // Initial state when collapsed
        animate={{
          width: isSearchExpanded ? "200px" : "0", // Expands when `isSearchExpanded` is true
          opacity: isSearchExpanded ? 1 : 0, // Fade in when expanded
        }}
        transition={{ duration: 0.3 }} // Smooth transition
        className="absolute left-0 top-0 bg-white p-2 rounded-md shadow-lg"
      >
        <input
          type="text"
          className="w-full border-none outline-none"
          placeholder="Search..."
          autoFocus={isSearchExpanded}
        />
      </motion.div>
    </div>
    </>
  );
}

export default AnimatedSearch;
