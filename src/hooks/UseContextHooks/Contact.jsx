import React, { useContext } from "react";
import { AppContext } from "./AppContext";

function Contact() {
    const {phone}=useContext(AppContext)
    const {name}=useContext(AppContext)
  return (
    <div>
      <h2>Contact</h2>
      <p>Phone:{phone}</p>
      <p>Phone:{name}</p>
    </div>
  );
}

export default Contact;
