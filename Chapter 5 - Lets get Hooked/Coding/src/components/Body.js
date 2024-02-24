import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [filteredData, setFilteredData] = useState(restaurantList);

  return (
    <>
      <div className="body-container">
        <div className="search-container">
          <button
            className="filter-btn"
            onClick={() => {
              const filtedRestaurants = filteredData.filter(
                (restaurant) => restaurant.info.avgRating > 4.4
              );
              setFilteredData(filtedRestaurants);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="restaurants-container">
          {filteredData.map((restaurant) => (
            <RestaurantCard
              key={restaurant.info.id}
              restaurantList={restaurant}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
