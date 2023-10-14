import { ChangeEvent } from "react";
import { SelectItem } from "../../../types/general";

export interface FilterSelectProps {
  /**Array of elect item structure to display in the select input*/
  options: SelectItem[];
  /**Funtion to handle input value change */
  handleOnChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}
