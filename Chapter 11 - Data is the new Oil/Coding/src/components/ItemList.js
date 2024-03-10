import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
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
              justifyContent: "center",
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
          <img
            src={CDN_URL + item.card.info.imageId}
            style={{ width: "80px" }}
          />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
