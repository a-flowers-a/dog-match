import { LoginData } from "../../../types/authentication";

export interface LoginCardProps {
  handleSubmit: (formData: LoginData) => void;
}
