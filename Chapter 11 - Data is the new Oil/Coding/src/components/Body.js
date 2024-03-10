import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import React, { useContext } from "react";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CORSPROXY, RESTAURANT_LIST_DESKTOP } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const checkStatus = useOnlineStatus();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(RESTAURANT_LIST_DESKTOP);
      const json = await data.json();
      const fetchedRestaurants =
        json.data?.cards[2].card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setListofRestaurants(fetchedRestaurants);
      setFilteredRestaurants(fetchedRestaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const { loggedInUser, setUserName } = useContext(UserContext);

  if (!listofRestaurants) {
    return <Shimmer />;
  }

  if (checkStatus === false) {
    return (
      <h1>
        Oops! You seem to be offline!!. Kindly check your Internet Connection
      </h1>
    );
  }

  return (
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
            const filteredRestaurants = listofRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4.4
            );
            setFilteredRestaurants(filteredRestaurants);
          }}
        >
          Top Rated Restaurants
        </button>
        {/* <div className="search-container">
          <input
            className="search"
            type="text"
            value={loggedInUser}
            placeholder="Change loggedin Username"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div> */}
      </div>
      <div className="restaurants-container">
        {filteredRestaurants.map((restaurant) => (
          <React.Fragment key={restaurant.info.id}>
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted restaurantList={restaurant} />
            ) : (
              <RestaurantCard restaurantList={restaurant} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Body;
