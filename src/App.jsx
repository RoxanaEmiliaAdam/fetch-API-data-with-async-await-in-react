import React, { useState, useEffect } from "react";
//import './App.css'

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  async function fetchAPI() {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      );
      const data = await response.json();
      if (data) {
        setData(data);
      }
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div>
      {loading ? (
        "Loading..."
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
