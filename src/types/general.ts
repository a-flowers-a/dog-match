export interface SelectItem {
  label: string;
  value: string;
}

export interface PaginationData {
  nextPage: number;
  nextOffset: number;
}

export enum SortType {
  ASC = "asc",
  DESC = "desc",
}
