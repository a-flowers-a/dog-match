import { MessageModalProps } from "./types";
import "./styles.scss";

function MessageModal({ message, title, handleClick }: MessageModalProps) {
  return (
    <div className="message-modal">
      <div className="message-modal__card">
        <span className="message-modal__title">{title}</span>
        <span className="message-modal__message">{message}</span>
        <button className="message-modal__button" onClick={handleClick}>
          Accept
        </button>
      </div>
    </div>
  );
}

export default MessageModal;
