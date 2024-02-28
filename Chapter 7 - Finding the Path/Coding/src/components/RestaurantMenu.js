import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState([]);
  const [resMenu, setResMenu] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=" +
        resId
    );
    const json = await response.json();
    setMenu(json.data.cards[2]?.card?.card?.info);
    setResMenu(
      json.data.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card
    );
  };

  //   const { name, cuisines, costForTwoMessage } =
  //     menu?.cards[2]?.card?.card?.info;

  //   const { itemCards } =
  //     menu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  //   console.log(itemCards);
  return (
    <div className="menu">
      <h1>{menu.name}</h1>
      <h3>
        {menu.cuisines} - {menu.costForTwoMessage}
      </h3>
      <br />
      <ul>
        {resMenu.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
