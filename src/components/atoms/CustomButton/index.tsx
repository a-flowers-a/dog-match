import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//Types
import { CustomButtonProps } from "./types";
//Styles
import "./styles.scss";

function CustomButton({
  containerStyles,
  disabled,
  iconName,
  title,
  handlePress,
}: CustomButtonProps) {
  return (
    <button
      aria-label={title}
      className={`custom-button-container ${containerStyles}`}
      disabled={disabled}
      onClick={handlePress}
    >
      {iconName && (
        <FontAwesomeIcon
          className="custom-button-container__icon"
          icon={iconName}
        />
      )}
      {title}
    </button>
  );
}

export default CustomButton;
