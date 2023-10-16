import { generateBreedSelectOptions } from "./utils";

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
});
