const Pagination = ({ btnsMapArr, page, setPage, setIsLoading }) => {
  return (
    <div className="flex gap-2 items-center self-center">
      {btnsMapArr.map((pageNumber) => (
        <button
          key={pageNumber}
          className={`p-2 shadow-sm rounded-lg px-2.5 py-1 cursor-pointer hover:bg-cyan-400 hover:text-white transition-all duration-250 ${
            page === pageNumber
              ? "bg-cyan-400 shadow-cyan-400 text-white scale-110"
              : ""
          }`}
          onClick={() => {
            setPage(pageNumber);
            setIsLoading(true);
          }}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
