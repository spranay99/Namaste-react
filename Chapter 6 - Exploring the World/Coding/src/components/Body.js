import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?page_type=DESKTOP_WEB_LISTING&lat=19.1889541&lng=72.835543"
    );
    const json = await data.json();
    setListofRestaurants(
      json.data?.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json.data?.cards[2].card?.card?.gridElements?.infoWithStyle.restaurants
    );
  };

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="filter-container">
        <div className="search-container">
          <input
            className="search"
            type="text"
            value={searchInput}
            placeholder="Search Restaurants/Food..."
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => {
              const searchedRestaurant = listofRestaurants.filter((rest) =>
                rest.info.name
                  .toLowerCase()
                  .includes(searchInput.toLocaleLowerCase())
              );
              setFilteredRestaurants(searchedRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filtedRestaurants = listofRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4.4
            );
            setListofRestaurants(filtedRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurants-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            restaurantList={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
