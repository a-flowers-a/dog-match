export interface MessageModalProps {
  /**Message to be shown as title in card */
  title: string;
  /**Message to be shown in card */
  message: string;
  /**Action to perform on continue */
  handleClick: () => void;
}
