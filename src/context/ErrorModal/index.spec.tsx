import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
//Provider related
import { ErrorModalContext } from "./context";
import ErrorModalProvider from ".";
import ErrorModalReducer from "./reducer";

const TestButtonId = "TestButtonId";
const ChangeMsgBtnId = "ChangeMsgBtnId";

enum ModalDisplay {
  Active = "Active",
  Inactive = "Inactive",
}
const TestMessage = "Test message shown";

const ErrorModalProviderWrapper = () => {
  const {
    state: { show, message },
    actions: { setMessage, setShow },
  } = ErrorModalContext();

  return (
    <div>
      <span>{show ? ModalDisplay.Active : ModalDisplay.Inactive}</span>
      <span>{message}</span>
      <button data-testid={TestButtonId} onClick={() => setShow(true)}>
        TOGGLE MODAL
      </button>
      <button
        data-testid={ChangeMsgBtnId}
        onClick={() => setMessage(TestMessage)}
      >
        SET MESSAGE
      </button>
    </div>
  );
};

describe("ErrorModalProvider tests", () => {
  test("Inactive error modal", () => {
    render(
      <ErrorModalProvider>
        <ErrorModalProviderWrapper />
      </ErrorModalProvider>
    );
    expect(screen.getByText(ModalDisplay.Inactive)).not.toBeNull();
    expect(screen.queryByText(ModalDisplay.Active)).toBeNull();
  });

  test("Active error modal", () => {
    render(
      <ErrorModalProvider>
        <ErrorModalProviderWrapper />
      </ErrorModalProvider>
    );
    act(() => {
      const setBtn = screen.getByTestId(TestButtonId);
      userEvent.click(setBtn);
    });

    expect(screen.getByText(ModalDisplay.Active)).not.toBeNull();
    expect(screen.queryByText(ModalDisplay.Inactive)).toBeNull();
  });

  test("Show message", () => {
    render(
      <ErrorModalProvider>
        <ErrorModalProviderWrapper />
      </ErrorModalProvider>
    );
    act(() => {
      const setBtn = screen.getByTestId(ChangeMsgBtnId);
      userEvent.click(setBtn);
    });
    expect(screen.getByText(TestMessage)).not.toBeNull();
  });

  test("Reducer default value", () => {
    ErrorModalReducer({} as any, { type: "" } as any);
  });
});
