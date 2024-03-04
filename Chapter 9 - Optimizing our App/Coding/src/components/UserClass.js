import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   count: 0,
    //   count2: 2,
    // };
    this.state = {
      userInfo: {
        avatar_url: "Dummy",
        name: "Dummy",
        location: "Default",
      },
    };
    console.log(this.props.name + "constructor called");
  }

  // async componentDidMount() {
  //   console.log(this.props.name + "componentDidMount called");
  //   Api Call
  //   const data = await fetch("https://api.github.com/users/spranay99");
  //   const json = await data.json();

  //   console.log(json);

  //   this.setState({
  //     userInfo: json,
  //   });
  // }
  async componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Namaste React OP");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Component will unmount");
  }

  render() {
    // const { name, location } = this.props;
    // const { count } = this.state;

    console.log(this.props.name + "render called");

    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        {/* <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase count
        </button> */}
        <img src={avatar_url} style={{ borderRadius: "50%" }} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: +91 1234512345</h4>
      </div>
    );
  }
}

export default UserClass;
