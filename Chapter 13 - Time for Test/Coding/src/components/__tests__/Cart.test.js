import { act } from "react-dom/test-utils";
import { fireEvent, screen, render } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Recommended (20)");
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(20);
  expect(screen.getByText("Cart: (0 items)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "Add" });
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart: (1 items)")).toBeInTheDocument();
  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart: (2 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(22);

  const clearCart = screen.getByRole("button", { name: "Clear Cart" });
  fireEvent.click(clearCart);

  expect(screen.getAllByTestId("foodItems").length).toBe(20);

  expect(screen.getByText("Your Cart is Empty!")).toBeInTheDocument();
});
