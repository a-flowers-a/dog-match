import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//Types
import { IconButtonProps } from "./types";
//Styles
import "./styles.scss";

function IconButton({
  containerStyles,
  iconName,
  size,
  title,
  onPress,
}: IconButtonProps) {
  return (
    <button
      aria-label={title}
      className={`icon-buton-container ${containerStyles}`}
      onClick={onPress}
    >
      <FontAwesomeIcon size={size} icon={iconName} />
      <span className="icon-buton-container__title">{title}</span>
    </button>
  );
}

IconButton.defaultProps = {
  size: "1x",
};

export default IconButton;
