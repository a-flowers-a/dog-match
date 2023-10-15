import { InputName } from "../constants/inputs";

export interface LoginData {
  [InputName.Name]: string;
  [InputName.Mail]: string;
}
