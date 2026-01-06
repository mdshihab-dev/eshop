import PaginationArrowLeftIcon from "../components/icons/PaginationArrowLeftIcon";
import PaginationArrowRightIcon from "../components/icons/PaginationArrowRightIcon";

const Pagination = ({ totalProducts, parPageProducts, currentPage, onPageChange}) => {
  let totalPages = Math.ceil(totalProducts / parPageProducts);
  let pagesShowBeforeAfter = 3;
  let pageNumbers = [];

  // This is for first page and ... dots
  if (currentPage > pagesShowBeforeAfter + 1) {
      pageNumbers.push(1);
    if (currentPage >= pagesShowBeforeAfter + 2) {
      pageNumbers.push("...");
    }
    if (currentPage < pagesShowBeforeAfter + 2) {
      pageNumbers = pageNumbers.filter((item) => item !== "..." );
    }
  }
  // Calculation for finding first & last page ........
  let firstPage = Math.max(1, currentPage - pagesShowBeforeAfter);
  let lastPage = Math.min(totalPages, currentPage + pagesShowBeforeAfter);
      for (let i = firstPage; i < lastPage; i++) {
        pageNumbers.push(i);
      }
  // This is for last and ... dots
  if (currentPage <= totalPages) {
    if (currentPage < totalPages - pagesShowBeforeAfter - 1) {
      pageNumbers.push("...");
    }
      pageNumbers.push(totalPages);
  }

  return (
    <div className=" max-w-screen lg:w-full flex justify-center my-2 lg:my-20 scale-75 lg:scale-100">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className=" cursor-pointer"
      >
        <PaginationArrowLeftIcon />
      </button>

      {pageNumbers.map((number, index) => {
        return (
          <button
            onClick={() => {
              onPageChange(number);
            }}
            key={index}
            disabled={number == "..."}
            className={`${
              currentPage === number
                ? "bg-[#FF624C] text-white"
                : number !== "..." && "hover:bg-[#ddd]"
            } mx-2 text-[#303030] font-poppins text-xl font-semibold leading-7.5 cursor-pointer h-10 w-10 flex items-center justify-center rounded-[5px] transition-all`}
          >
            {number}
          </button>
        );
      })}

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className=" cursor-pointer"
      >
        <PaginationArrowRightIcon />
      </button>
    </div>
  );
};

export default Pagination;
