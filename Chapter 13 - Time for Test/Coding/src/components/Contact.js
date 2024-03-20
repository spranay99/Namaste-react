import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 style={{ padding: "20px", margin: "20px", fontSize: " 25px" }}>
        Contact Us
      </h1>
      <form>
        <label>Name: </label>
        <input
          type="text"
          placeholder="name"
          style={{ border: "1px solid black", padding: "8px" }}
        />
        <br />
        <label>Message: </label>
        <input
          type="text"
          placeholder="message"
          style={{ border: "1px solid black", padding: "8px" }}
        />
        <br />
        <button
          style={{
            border: "1px solid black",
            padding: "8px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
