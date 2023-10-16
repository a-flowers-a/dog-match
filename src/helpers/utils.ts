import { SelectItem } from "../types/general";

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
