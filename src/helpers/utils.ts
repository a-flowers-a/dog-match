import { ElementsPerPage } from "../constants/dog";
import { Dog } from "../types/dog";
import { PaginationData, SelectItem, SortType } from "../types/general";

/**
 * Generates the structure for the select input options.
 * @param breeds array of breed names
 * @returns array of structure for select's options
 */
export function generateBreedSelectOptions(breeds: string[]): SelectItem[] {
  return breeds.map((breed) => ({
    label: breed,
    value: breed,
  }));
}

/**
 * Gets the number of pages needed in order to show al the number of
 * tickers passed. The number of items per page is given by @const ElementsPerPage.
 * @param totalCount total number of tickers
 * @returns pages needed to show all of the given tickers
 */
export function getMaxNumPages(totalCount: number): number {
  if (totalCount < 0) {
    return 1;
  }
  const numOfPages = totalCount / ElementsPerPage;
  return Math.ceil(numOfPages);
}

/**
 * Gets the next value for the page and offset according to the passed
 * direction and current page.
 * @param direction previous or next page
 * @param currPage current page number
 * @returns the next page to display and the next offset to request
 */
export function getPageAndOffset(
  direction: "prev" | "next",
  currPage: number,
  totalPages: number
): PaginationData {
  //Assume it is 'next' to reduce conditions
  let nextPage = currPage + 1;
  if (direction === "prev") {
    nextPage = currPage <= 1 ? 1 : currPage - 1;
  } else if (currPage >= totalPages) {
    nextPage = totalPages;
  }
  const nextOffset = ElementsPerPage * (nextPage - 1);
  return {
    nextPage,
    nextOffset,
  };
}

/**
 * Sorts the dogs alphabetically by their names.
 * If no type is provided then it's A-Z, if DESC
 * is set as type then Z-A is the order
 * @param dogs array of dogs to be sorted
 * @param type ASC or desc
 */
export function sortDogsAlphabetically(
  dogs: Dog[],
  type: SortType = SortType.ASC
): Dog[] {
  dogs.sort((a, b) => {
    const isAsc = type === SortType.ASC;
    if (a.name < b.name) {
      return isAsc ? -1 : 1;
    }
    if (a.name > b.name) {
      return isAsc ? 1 : -1;
    }
    return 0;
  });
  return dogs;
}
