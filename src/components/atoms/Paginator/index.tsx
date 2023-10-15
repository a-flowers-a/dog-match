//Types
import { PaginatorProps } from "./types";
//Styles
import "./styles.scss";

function Paginator({ pagesData, handlePagination }: PaginatorProps) {
  return (
    <div className="paginator-container">
      <button
        className="paginator-container__btn"
        disabled={pagesData.currentPage <= 1}
        onClick={() => handlePagination("prev")}
      >
        prev
      </button>
      <span className="paginator-container__counter">
        {pagesData.currentPage} of {pagesData.total}
      </span>
      <button
        className="paginator-container__btn"
        disabled={pagesData.currentPage >= pagesData.total}
        onClick={() => handlePagination("next")}
      >
        next
      </button>
    </div>
  );
}

export default Paginator;
