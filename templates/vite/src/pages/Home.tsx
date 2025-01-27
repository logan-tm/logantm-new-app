import { useState } from "react";

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>Home Page</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Good luck!</p>
      </div>
    </>
  );
};

export default Home;
