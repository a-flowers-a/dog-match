import { useState } from "react";
import {
  faCakeCandles,
  faHeart,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//Types
import { ListCardProps } from "./types";
import { Color } from "../../../types/colors";
//Styles
import "./styles.scss";

function ListCard({ dogData, handleOnPress }: ListCardProps) {
  /**
   * NOTE: to know the real starting fav state, this should be passed in dogData
   * otherwise, every rerender, the visual state of fav will be false
   */
  const [isVisuallyFav, setIsVisuallyFav] = useState(false);

  const favColor = isVisuallyFav ? Color.secondary : Color.grey;

  /**
   * Changes the visual fav state and calls the parent callback to handle
   * fav logic
   */
  function handleOnClick() {
    setIsVisuallyFav((prevVal) => !prevVal);
    handleOnPress();
  }

  return (
    <button className="list-card-container" onClick={handleOnClick}>
      <div className="list-card-container__img-container">
        <img
          className="list-card-container__img"
          src={dogData.img}
          alt={`${dogData.name}-${dogData.breed}`}
        />
      </div>
      <div className="list-card-container__info-container">
        <span className="list-card-container__main">{dogData.name}</span>
        <span className="list-card-container__subtitle">{dogData.breed}</span>
        <div className="list-card-container__body-container">
          <div className="list-card-container__body-item">
            <FontAwesomeIcon
              className="list-card-container__body-icon"
              icon={faCakeCandles}
              color={Color.textPrimary}
            />
            <span>{dogData.age}</span>
          </div>
          <div className="list-card-container__body-item">
            <span>
              <FontAwesomeIcon
                className="list-card-container__body-icon"
                icon={faLocationDot}
                color={Color.textPrimary}
              />
              {dogData.zip_code}
            </span>
          </div>
        </div>
      </div>
      <div className="list-card-container__fav-container">
        <FontAwesomeIcon size="2x" icon={faHeart} color={favColor} />
      </div>
    </button>
  );
}

export default ListCard;
