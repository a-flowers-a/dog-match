import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//Types
import { IconButtonProps } from "./types";
//Styles
import "./styles.scss";

function IconButton({ iconName, size, title }: IconButtonProps) {
  return (
    <button aria-label={title} className="icon-buton-container">
      <FontAwesomeIcon size={size} icon={iconName} />
      <span>{title}</span>
    </button>
  );
}

IconButton.defaultProps = {
  size: "1x",
};

export default IconButton;
