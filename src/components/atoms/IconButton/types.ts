import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";

export interface IconButtonProps {
  /**FontAwesome icon name */
  iconName: IconProp;
  /**Text to show for the icon */
  title: string;
  /**Extra classname to be applied to the component container */
  containerStyles?: string;
  /**Size to apply to fontawesome icon */
  size?: SizeProp;
  /**Function to be called on icon press */
  onPress: () => void;
}
