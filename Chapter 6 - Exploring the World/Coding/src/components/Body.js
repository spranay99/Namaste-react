import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(
    //   "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=19.1889541&lng=72.835543&carousel=true&third_party_vendor=1"
    // );
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?page_type=DESKTOP_WEB_LISTING&lat=19.1889541&lng=72.835543"
    );
    const json = await data.json();
    setListofRestaurants(
      json.data?.cards[1].card?.card?.gridElements?.infoWithStyle.restaurants
    );
  };

  if (listofRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <>
      <div className="body-container">
        <div className="search-container">
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
          {listofRestaurants.map((restaurant) => (
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
