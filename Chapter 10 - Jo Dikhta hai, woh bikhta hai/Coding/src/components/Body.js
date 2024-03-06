import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { PROXY_API_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const checkStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(PROXY_API_URL);
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?page_type=DESKTOP_WEB_LISTING&lat=19.1889541&lng=72.835543"
    // );
    const json = await data.json();
    setListofRestaurants(
      json.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json.data?.cards[1].card?.card?.gridElements?.infoWithStyle.restaurants
    );
  };

  if (listofRestaurants.length === 0) {
    return <Shimmer />;
  }

  if (checkStatus === false)
    return (
      <h1>
        Oops! You seems to be offline!!. Kindly check your Internet Connection
      </h1>
    );

  return (
    <div className="body-container">
      <div className="filter-container flex">
        <div className="search-container m-4 p-4">
          <input
            className="border border-solid border-black "
            type="text"
            value={searchInput}
            placeholder="Search Restaurants/Food..."
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            className="px-4 py-0.5 bg-orange-200 m-4 rounded-lg"
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
        <div className="search-container m-4 p-4">
          <button
            className="px-4 py-0.5 bg-orange-200 m-4 rounded-lg"
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
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <RestaurantCard restaurantList={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
