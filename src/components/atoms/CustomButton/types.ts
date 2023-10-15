import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface CustomButtonProps {
  /**Text to show for the icon */
  title: string;
  /**Extra classname to be passed to the main container */
  containerStyles?: string;
  /**Button disabled prop */
  disabled?: boolean;
  /**FontAwesome icon name */
  iconName?: IconProp;
  /**Function to be called on icon press */
  handlePress: () => void;
}
