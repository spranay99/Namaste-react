import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/ResCardMock.json";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { withPromotedLabel } from "../RestaurantCard";

const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

it("Should load Resturant Card Component with Props data", () => {
  render(
    <BrowserRouter>
      <RestaurantCard restaurantList={MOCK_DATA} />
    </BrowserRouter>
  );

  const name = screen.getByText("MM Mithaiwala");

  expect(name).toBeInTheDocument();
});

it("Should load Restaurant Card Component with Promoted Label", () => {
  render(
    <BrowserRouter>
      <RestaurantCardPromoted restaurantList={MOCK_DATA} />
    </BrowserRouter>
  );

  const promotedLabel = screen.getByText("Promoted");

  expect(promotedLabel).toBeInTheDocument();
});
