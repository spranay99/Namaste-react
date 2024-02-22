import React from "react";
import ReactDOM from "react-dom/client";

const title = <h1>Hey There,</h1>;

const TitleComponent = () => <h3>Welcome to Namaste React!</h3>;

const BodyComponent = () => (
  <div>
    {title}
    <h2>Three ways to add component: </h2>
    <TitleComponent />
    <TitleComponent></TitleComponent>
    {TitleComponent()}
    <h3>By Akshay Saini!</h3>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BodyComponent />);
