import ItemList from "./ItemList";

const RestaurantCategories = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div
        style={{
          width: "100%",
          margin: "0 auto",
          backgroundColor: "#f0f0f0",
          margin: "10px 0",
          alignItems: "center",
          padding: "15px",
          borderRadius: "7px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            cursor: "pointer",
          }}
          onClick={handleClick}
        >
          <span style={{ fontWeight: "bold" }}>
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategories;
