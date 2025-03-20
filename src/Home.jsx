import { useState } from "react";

function Home() {
  const firstName = "John";
  let lastName = "Wick";
  // value, setValue
  const [fName, setFname] = useState("Bola");
  const [lName, setLname] = useState("Ige");

  const handleReset = () => {
    setFname("Bola");
    setLname("Ige");
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        The name of the assassin is {firstName} - {lastName}
      </p>
      <button
        onClick={() => {
          console.log(lastName);
          lastName = "Olamide";
          console.log(lastName);
        }}
      >
        Click Me
      </button>
      <h2>UseState in Action!!!</h2>
      <p>
        The name of the slain A.G is {fName} - {lName}
      </p>
      <button onClick={() => setFname("Naruto")}>Change first name</button>
      <button onClick={() => setLname("Uzumaki")}>Change last name</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Home;
