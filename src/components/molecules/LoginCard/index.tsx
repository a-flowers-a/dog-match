import { ChangeEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
//Types
import { LoginCardProps } from "./types";
import { InputName } from "../../../constants/inputs";
import { LoginData } from "../../../types/authentication";
//Styles
import "./styles.scss";

function LoginCard({ handleSubmit }: LoginCardProps) {
  const [formData, setFormData] = useState<LoginData>({
    [InputName.Name]: "",
    [InputName.Mail]: "",
  });

  const disabled =
    formData[InputName.Mail] === "" || formData[InputName.Name] === "";

  /**
   * Sets the changed values for each
   * @param event HTML input change event
   */
  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setFormData((prevVal) => ({
      ...prevVal,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <div className="login-card-container">
      <div className="login-card-container__title">
        <span>Find your next 4</span>
        <FontAwesomeIcon icon={faPaw} />
        <span>&nbsp;friend!</span>
      </div>
      <form>
        <div className="login-card-container__label-input">
          <label htmlFor={InputName.Name}>Name</label>
          <input
            id={InputName.Name}
            className="login-card-container__input"
            maxLength={20}
            name={InputName.Name}
            placeholder="Your Name"
            onChange={handleInputChange}
          />
        </div>
        <div className="login-card-container__label-input">
          <label htmlFor={InputName.Mail}>Mail</label>
          <input
            id={InputName.Mail}
            className="login-card-container__input"
            maxLength={40}
            name={InputName.Mail}
            placeholder="example@mail.com"
            type="mail"
            onChange={handleInputChange}
          />
        </div>
        <button
          aria-label="login"
          className="login-card-container__btn"
          disabled={disabled}
          onClick={(event) => {
            event.preventDefault();
            handleSubmit(formData);
          }}
        >
          Start finding
        </button>
      </form>
    </div>
  );
}

export default LoginCard;
