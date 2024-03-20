import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockRestaurantListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search Restaurant List for Foo ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const totalCards = screen.getAllByTestId("resCards");

  expect(totalCards.length).toBe(9);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "Foo" } });

  fireEvent.click(searchBtn);

  const card = screen.getAllByTestId("resCards");
  expect(card.length).toBe(1);
});

it("Should filter Top Rated restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const totalCardsBefore = screen.getAllByTestId("resCards");
  expect(totalCardsBefore.length).toBe(9);

  const topRestBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(topRestBtn);

  const topCards = screen.getAllByTestId("resCards");

  expect(topCards.length).toBe(6);
});
