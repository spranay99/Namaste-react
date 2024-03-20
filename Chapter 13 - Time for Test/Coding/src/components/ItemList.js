import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          style={{
            padding: "20px",
            borderBottom: "2px solid gray",
            textAlign: "left",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <div>
              <span style={{ marginRight: "10px" }}>{item.card.info.name}</span>
              <span>
                - ₹{" "}
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p style={{ fontSize: "12px" }}>{item.card.info.description}</p>
          </div>
          <div style={{ position: "relative" }}>
            <img
              src={CDN_URL + item.card.info.imageId}
              style={{ width: "118px", height: "120px", borderRadius: "10px" }}
            />
            <button
              style={{
                backgroundColor: "black",
                color: "white",
                position: "absolute",
                left: "0px",
                padding: "5px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
              onClick={() => handleAddItem(item)}
            >
              Add
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
