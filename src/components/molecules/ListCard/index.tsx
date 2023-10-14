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

function ListCard({ dogData }: ListCardProps) {
  const favColor = false ? Color.secondary : Color.grey;
  return (
    <div className="list-card-container">
      <div className="list-card-container__img-container">
        <img
          className="list-card-container__img"
          src={dogData.img}
          alt={`${dogData.name}-${dogData.breed}`}
        />
      </div>
      <div className="list-card-container__info-container">
        <div className="list-card-container__main">{dogData.name}</div>
        <div className="list-card-container__subtitle">{dogData.breed}</div>
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
      <button className="list-card-container__fav-container">
        <FontAwesomeIcon size="2x" icon={faHeart} color={favColor} />
      </button>
    </div>
  );
}

export default ListCard;
