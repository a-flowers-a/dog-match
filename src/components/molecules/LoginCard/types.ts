import { InputName } from "../../../constants/inputs";

export interface LoginData {
  [InputName.Name]: string;
  [InputName.Mail]: string;
}
export interface LoginCardProps {
  handleSubmit: (formData: LoginData) => void;
}
