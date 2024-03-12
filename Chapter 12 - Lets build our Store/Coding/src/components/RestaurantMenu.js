import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  return (
    <div className="menu">
      <h1 style={{ textAlign: "center", fontWeight: "bold", margin: "20px" }}>
        {resInfo?.cards[2]?.card?.card?.info?.name}
      </h1>
      <h3 style={{ textAlign: "center", fontWeight: "bold" }}>
        {resInfo?.cards[2]?.card?.card?.info?.cuisines} -{" "}
        {resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}
      </h3>
      {resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR.cards
        .filter(
          (c) =>
            c?.card?.["card"]?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
        .map((category, index) => (
          <RestaurantCategories
            key={category.card.card.title}
            data={category.card.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
    </div>
  );
};

export default RestaurantMenu;
