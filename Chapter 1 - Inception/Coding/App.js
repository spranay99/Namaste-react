/*The createElement takes 3 arguments - 1st which element needs to be created. 2nd is the object where we can pass attributes for that element. 3rd What needs to be shown or the text*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "H1 tag"),
    React.createElement("h2", {}, "H2 tag"),
  ]),
  React.createElement("div", { id: "child3" }, [
    React.createElement("h1", {}, "H1 tag"),
    React.createElement("h2", {}, "H2 tag"),
  ]),
]);

// const heading = React.createElement("h1", { id: "heading" }, "Namaste React"); //heading here is an object

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // render will convert the heading object to Html which browsers understands
