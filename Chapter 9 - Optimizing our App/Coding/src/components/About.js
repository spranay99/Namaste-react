import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor called");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  render() {
    console.log("Parent Render called");
    return (
      <>
        <h1>About us</h1>
        <h2>This is Namaste React web series</h2>
        <UserClass name={"Pranay Shah"} location={"Mumbai"} />
        {/* <UserClass name={"First Child"} /> */}
        {/* <UserClass name={"Second Child"} /> */}
      </>
    );
  }
}
export default About;
