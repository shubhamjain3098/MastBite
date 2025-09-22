import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count2] = useState(1);

  return (
    <div className="user-card p-[10px] border border-black">
      <h1>Name: {name}</h1>
      <h2>Location: Bangaluru</h2>
      <h3>Contact: shubhamjain11099@gmail.com</h3>
      <h3>Count: {count}</h3>
      <h3>Count: {count2}</h3>
    </div>
  );
};
export default User;
