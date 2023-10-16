//Styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCakeCandles,
  faDog,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
//Types
import { MatchModalProps } from "./types";
import { Color } from "../../../types/colors";
//Styles
import "./styles.scss";

function MatchModal({ dogData, handleOnPress }: MatchModalProps) {
  return (
    <div className="match-modal-container">
      <div className="match-modal-container__card">
        <div className="match-modal-container__title">
          <span>You got a match!</span>
        </div>
        <div className="match-modal-container__foto-name">
          <div className="match-modal-container__name">
            <span>{dogData.name}</span>
          </div>
          <div className="match-modal-container__img-container">
            <img
              className="match-modal-container__img"
              src={dogData.img}
              alt={`${dogData.name}-${dogData.breed}`}
            />
          </div>
        </div>

        <div className="match-modal-container__remaining-data">
          <div className="match-modal-container__body-item">
            <FontAwesomeIcon
              className="match-modal-container__body-icon"
              icon={faDog}
              color={Color.textPrimary}
            />
            <span>{dogData.breed}</span>
          </div>
          <div className="match-modal-container__body-item">
            <FontAwesomeIcon
              className="match-modal-container__body-icon"
              icon={faCakeCandles}
              color={Color.textPrimary}
            />
            <span>{dogData.age}</span>
          </div>
          <div className="match-modal-container__body-item">
            <span>
              <FontAwesomeIcon
                className="match-modal-container__body-icon"
                icon={faLocationDot}
                color={Color.textPrimary}
              />
              {dogData.zip_code}
            </span>
          </div>
        </div>
        <div className="match-modal-container__button-container">
          <button
            aria-label="close-modal-button"
            className="match-modal-container__button"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default MatchModal;
