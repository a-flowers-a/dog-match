import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
//Provider related
import { LoaderContext } from "./context";
import LoaderProvider from ".";
import LoaderReducer from "./reducer";

const TestButtonId = "TestButtonId";
enum LoaderValue {
  Active = "Active",
  Inactive = "Inactive",
}
const LoaderProviderWrapper = () => {
  const {
    state: { loading },
    actions: { setLoader },
  } = LoaderContext();

  return (
    <div>
      <span>{loading ? LoaderValue.Active : LoaderValue.Inactive}</span>
      <button data-testid={TestButtonId} onClick={() => setLoader(true)}>
        TOGGLE LOADER
      </button>
    </div>
  );
};

describe("LoaderProvider tests", () => {
  test("Inactive loader", () => {
    render(
      <LoaderProvider>
        <LoaderProviderWrapper />
      </LoaderProvider>
    );
    expect(screen.getByText(LoaderValue.Inactive)).not.toBeNull();
    expect(screen.queryByText(LoaderValue.Active)).toBeNull();
  });

  test("Active Loader", () => {
    render(
      <LoaderProvider>
        <LoaderProviderWrapper />
      </LoaderProvider>
    );
    act(() => {
      const setBtn = screen.getByTestId(TestButtonId);
      userEvent.click(setBtn);
    });

    expect(screen.getByText(LoaderValue.Active)).not.toBeNull();
    expect(screen.queryByText(LoaderValue.Inactive)).toBeNull();
  });

  test("Reducer default value", () => {
    LoaderReducer({} as any, { type: "" } as any);
  });
});
