import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ restaurantList }) => {
  const { name, cuisines, cloudinaryImageId, avgRating, sla, costForTwo } =
    restaurantList?.info;
  return (
    <div className="p-4 w-[250px] hover:scale-105">
      <img className="max-h-56 py-4" src={CDN_URL + cloudinaryImageId} />
      <div className="restaurant-details">
        <h3 className="font-bold text-xl">{name}</h3>
        <p>{cuisines.slice(0, 2).join(", ")}</p>
        <div>
          <span>{avgRating}⭐</span>
          <span>{sla?.slaString}</span>
        </div>
        <p>{costForTwo}</p>
      </div>
    </div>
  );
};
export default RestaurantCard;
