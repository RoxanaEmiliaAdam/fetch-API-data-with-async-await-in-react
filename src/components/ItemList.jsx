import React from "react";

export default function ItemList({ data }) {
  return (
    <div>
      {data.map((item) => (
        <div className="item" key={item.id}>
          <p className="post-id">
            Post ID: {item.postId} and ID: {item.id}
          </p>
          <p>
            {" "}
            <em> Comment:</em> {item.body}
          </p>
        </div>
      ))}
    </div>
  );
}
