import React from "react";
import { useQuery, useQueryClient } from "react-query";

export default function Splash() {
  // Queries
  const query = useQuery("todos", getTodos);

  return (
    <div
      style={{
        maxWdth: "700px",
        margin: "0 auto",
        backgroundColor: "#999"
      }}
    >
      {query.data && query.data.map((i) => <ul key={i.id}>{i.title}</ul>)}
    </div>
  );
}

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await res.json();
  console.log(data);
  return data;
}
