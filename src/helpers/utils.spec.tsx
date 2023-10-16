import { ElementsPerPage } from "../constants/dog";
import { SortType } from "../types/general";
import {
  generateBreedSelectOptions,
  getMaxNumPages,
  getPageAndOffset,
  sortDogsAlphabetically,
} from "./utils";

describe("All utils tests", () => {
  describe("All generateBreedSelectOptions tests", () => {
    test("Empty", () => {
      expect(generateBreedSelectOptions([])).toEqual([]);
    });
    test("Successful structure", () => {
      expect(
        generateBreedSelectOptions([
          "Affenpinscher",
          "Afghan Hound",
          "African Hunting Dog",
        ])
      ).toEqual([
        {
          label: "Affenpinscher",
          value: "Affenpinscher",
        },
        {
          label: "Afghan Hound",
          value: "Afghan Hound",
        },
        {
          label: "African Hunting Dog",
          value: "African Hunting Dog",
        },
      ]);
    });
  });

  describe("All getMaxNumPages tests", () => {
    test("zero total count", () => {
      expect(getMaxNumPages(0)).toEqual(0);
    });

    test("Not exact division", () => {
      expect(getMaxNumPages(ElementsPerPage * 3 + 17)).toEqual(4);
    });

    test("Not integer passed", () => {
      expect(getMaxNumPages(ElementsPerPage * 3 + 17.8)).toEqual(4);
    });

    test("Negative number passed", () => {
      expect(getMaxNumPages(-ElementsPerPage)).toEqual(1);
    });
  });

  describe("All getPageAndOffset tests", () => {
    test("Page 1 and go to prev", () => {
      expect(getPageAndOffset("prev", 1, 3)).toEqual({
        nextPage: 1,
        nextOffset: 0,
      });
    });
    test("Page < 1 and go to prev", () => {
      expect(getPageAndOffset("prev", -1, 3)).toEqual({
        nextPage: 1,
        nextOffset: 0,
      });
    });
    test("Page 10 and go to next", () => {
      expect(getPageAndOffset("next", 10, 11)).toEqual({
        nextPage: 11,
        nextOffset: 250,
      });
    });
    test("Max page and go to next", () => {
      expect(getPageAndOffset("next", 10, 10)).toEqual({
        nextPage: 10,
        nextOffset: 225,
      });
    });
  });

  describe("All sortDogsAlphabetically tests", () => {
    test("empty", () => {
      expect(sortDogsAlphabetically([])).toEqual([]);
    });
    test("ASC", () => {
      expect(
        sortDogsAlphabetically([
          {
            img: "https://frontend-take-home.fetch.com/dog-images/n02110627-affenpinscher/n02110627_10225.jpg",
            name: "Yolanda",
            age: 13,
            breed: "Affenpinscher",
            zip_code: "21056",
            id: "NXGFTIcBOvEgQ5OCx8A1",
          },
          {
            img: "https://frontend-take-home.fetch.com/dog-images/n02110627-affenpinscher/n02110627_10437.jpg",
            name: "Wendell",
            age: 1,
            breed: "Affenpinscher",
            zip_code: "06104",
            id: "NnGFTIcBOvEgQ5OCx8A1",
          },
          {
            img: "https://frontend-take-home.fetch.com/dog-images/n02110627-affenpinscher/n02110627_11365.jpg",
            name: "Lea",
            age: 11,
            breed: "Affenpinscher",
            zip_code: "36032",
            id: "RHGFTIcBOvEgQ5OCx8A1",
          },
        ])
      ).toEqual([
        {
          img: "https://frontend-take-home.fetch.com/dog-images/n02110627-affenpinscher/n02110627_11365.jpg",
          name: "Lea",
          age: 11,
          breed: "Affenpinscher",
          zip_code: "36032",
          id: "RHGFTIcBOvEgQ5OCx8A1",
        },
        {
          img: "https://frontend-take-home.fetch.com/dog-images/n02110627-affenpinscher/n02110627_10437.jpg",
          name: "Wendell",
          age: 1,
          breed: "Affenpinscher",
          zip_code: "06104",
          id: "NnGFTIcBOvEgQ5OCx8A1",
        },
        {
          img: "https://frontend-take-home.fetch.com/dog-images/n02110627-affenpinscher/n02110627_10225.jpg",
          name: "Yolanda",
          age: 13,
          breed: "Affenpinscher",
          zip_code: "21056",
          id: "NXGFTIcBOvEgQ5OCx8A1",
        },
      ]);
    });
    test("ASC", () => {
      expect(
        sortDogsAlphabetically(
          [
            {
              img: "https://frontend-take-home.fetch.com/dog-images/n02110627-affenpinscher/n02110627_10225.jpg",
              name: "Yolanda",
              age: 13,
              breed: "Affenpinscher",
              zip_code: "21056",
              id: "NXGFTIcBOvEgQ5OCx8A1",
            },
            {
              img: "https://frontend-take-home.fetch.com/dog-images/n02110627-affenpinscher/n02110627_10437.jpg",
              name: "Wendell",
              age: 1,
              breed: "Affenpinscher",
              zip_code: "06104",
              id: "NnGFTIcBOvEgQ5OCx8A1",
            },
            {
              img: "https://frontend-take-home.fetch.com/dog-images/n02110627-affenpinscher/n02110627_11365.jpg",
              name: "Lea",
              age: 11,
              breed: "Affenpinscher",
              zip_code: "36032",
              id: "RHGFTIcBOvEgQ5OCx8A1",
            },
          ],
          SortType.DESC
        )
      ).toEqual([
        {
          img: "https://frontend-take-home.fetch.com/dog-images/n02110627-affenpinscher/n02110627_10225.jpg",
          name: "Yolanda",
          age: 13,
          breed: "Affenpinscher",
          zip_code: "21056",
          id: "NXGFTIcBOvEgQ5OCx8A1",
        },
        {
          img: "https://frontend-take-home.fetch.com/dog-images/n02110627-affenpinscher/n02110627_10437.jpg",
          name: "Wendell",
          age: 1,
          breed: "Affenpinscher",
          zip_code: "06104",
          id: "NnGFTIcBOvEgQ5OCx8A1",
        },
        {
          img: "https://frontend-take-home.fetch.com/dog-images/n02110627-affenpinscher/n02110627_11365.jpg",
          name: "Lea",
          age: 11,
          breed: "Affenpinscher",
          zip_code: "36032",
          id: "RHGFTIcBOvEgQ5OCx8A1",
        },
      ]);
    });
  });
});
