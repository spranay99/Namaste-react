import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("h2", { id: "parent" }, "Namaste React");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
