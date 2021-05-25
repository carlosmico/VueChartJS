import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  //componentDidMount || componentDidUpdate
  useEffect(() => {
    console.log("Component mounted or updated ");
  });

  //componentDidMount
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  //componentDidMount
  useEffect(() => {
    console.log("Count variable changed");
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
