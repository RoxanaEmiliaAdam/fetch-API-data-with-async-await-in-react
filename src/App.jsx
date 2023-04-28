import React, { useState } from "react";
//import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  async function fetchAPI() {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data) {
        setData(data);
      }
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }

  return (
    <div>
      {error && <p>{error}</p>}
      <button onClick={fetchAPI}>Fetch Data</button>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {data &&
            data.map((item) => (
              <div key={item.id}>
                <p>
                  Post ID: {item.postId} and ID: {item.id}
                </p>
                <p>Comment: {item.body}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default App;
