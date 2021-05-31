import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [list] = useState([1, 1, 1, 1, 1]);
  return (
    <div className="alert-info">
      <h1 className="bg-danger  text-info p-3 rounded sticky-top"> Mini Instagram</h1>

      {list.map((item, index) => (
        <div
          key={index}
          className=" m-3 rounded"
          style={{ height: "300px" }}
        >
          <img
            src= {"https://picsum.photos/300" + index}
            className="rounded"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt=""
          />
        </div>
      ))}
    </div>
  );
}
