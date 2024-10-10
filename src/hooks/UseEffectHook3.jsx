import React, { useState, useEffect } from "react";

export default function UseEffectHook3() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  console.log("inside app render");

  useEffect(() => {
    console.log("inside effect render");
    setTimeout(() => {
      setCount((c) => c + 1);
    }, 1000);
  }, [count]);
  return (
    <div>
      <h1>I've render the {count} times</h1>
    </div>
  );
}
