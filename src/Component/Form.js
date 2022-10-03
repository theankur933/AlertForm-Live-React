import React from "react";

export default function Form() {
  const alertClick = () => {
    alert("Thank you for the Submitting Form!!!");
  };
  return (
    <>
      <form>
        <div>
          <label>Name: </label>
          <input type="text" />
        </div>
        <div>
          <label>Phone Number: </label>
          <input type="number" />
        </div>
        <div>
          <label>Email: </label>
          <input type="email" />
        </div>
        <button className="btn" type="submit" onClick={alertClick}>
          Submit
        </button>
      </form>
    </>
  );
}
