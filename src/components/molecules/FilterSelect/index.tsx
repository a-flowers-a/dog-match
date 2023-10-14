import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
//Types
import { InputName } from "../../../constants/inputs";
import { FilterSelectProps } from "./types";
//Styles
import "./styles.scss";

function FilterSelect({ options, handleOnChange }: FilterSelectProps) {
  return (
    <div className="filter-select-container">
      <div className="filter-select-container__icon-container">
        <FontAwesomeIcon icon={faFilter} />
      </div>
      <select
        className="filter-select-container__select"
        aria-label="breed-filter-select"
        id={InputName.BreedSelect}
        defaultValue={options[0].value}
        name={InputName.BreedSelect}
        onChange={handleOnChange}
      >
        {options.map((option) => {
          return (
            <option
              className="filter-select-container__option"
              key={option.value}
              value={option.value}
            >
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}
export default FilterSelect;
