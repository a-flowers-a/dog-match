//Types
import { LoaderProps } from "./types";
//STyles
import "./styles.scss";

function Loader({ show }: LoaderProps) {
  if (!show) {
    return null;
  }

  return (
    <div className="loader-modal">
      <div className="loader-modal__ring" />
    </div>
  );
}

export default Loader;
