import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ restaurantList }) => {
  // const { name, cuisines, cloudinaryImageId, avgRating, sla, costForTwo } =
  //   restaurantList?.info;
  return (
    <div className="restaurant-cards">
      <Link to={"/restaurants/" + restaurantList?.info?.id}>
        <img
          className="restaurant-img"
          src={CDN_URL + restaurantList?.info?.cloudinaryImageId}
        />
      </Link>
      <div className="restaurant-details">
        <h3>{restaurantList?.info.name}</h3>
        <p>{restaurantList?.info?.cuisines.slice(0, 2).join(", ")}</p>
        <div>
          <span>{restaurantList?.info?.avgRating}⭐</span>
          <span>{restaurantList?.info?.sla?.slaString}</span>
        </div>
        <p>{restaurantList?.info?.costForTwo}</p>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="promoted">
        <label className="promoted-label">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
