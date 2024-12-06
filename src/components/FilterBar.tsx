
const FiltersBar = () => {
  return (
    <div className="bg-white">
      <div className="bg-white p-4 animate__animated animate__fadeIn animate__delay-3s">
        {/* Filters */}
        <div className="flex items-center justify-center space-x-[35px] mt-6 text-gray-500">
          <button
            className="text-blue-500 text-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-blue-700 "
          >
            All <span className="bg-blue-400 rounded-full p-1 text-white">35</span>
          </button>
          <span>|</span>
          <button
            className="text-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-gray-700"
          >
            Open{" "}
            <span className="bg-gray-400 rounded-full p-1 px-2 text-white">14</span>
          </button>
          <span>|</span>
          <button
            className="text-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-gray-700"
          >
            Closed{" "}
            <span className="bg-gray-400 rounded-full p-1 px-2 text-white">19</span>
          </button>
          <span>|</span>
          <button
            className="text-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-gray-700"
          >
            Archived{" "}
            <span className="bg-gray-400 rounded-full px-2 p-1 text-white">2</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FiltersBar;
