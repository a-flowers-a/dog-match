export interface PagesData {
  currentPage: number;
  total: number;
}
export interface PaginatorProps {
  pagesData: PagesData;
  handlePagination: (type: "next" | "prev") => void;
}
