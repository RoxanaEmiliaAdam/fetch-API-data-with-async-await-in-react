import React, { useState } from "react";
import ItemList from "./components/ItemList";

import "./index.css";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  async function fetchAPI() {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );

      if (!response.ok) {
        throw Error(`Error! Data could not be fetched`);
      }

      const data = await response.json();
      if (data) {
        setData(data);
        setError("");
      }
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }

  return (
    <div className="container">
      {error && <p>{error}</p>}
      <button className="fetch-btn" onClick={fetchAPI}>
        Fetch Data
      </button>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="data-container">{data && <ItemList data={data} />}</div>
      )}
    </div>
  );
}

export default App;
