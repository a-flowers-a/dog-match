import { Dog } from "../../../types/dog";

export interface ListCardProps {
  /**Data to be shown */
  dogData: Dog;
  /**Indicates if dog is a favorite */
  isFav: boolean;
  /**Function to handle onFav click */
  handleOnPress: () => void;
}
