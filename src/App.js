import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [list] = useState([1, 2, 3, 4, 5, 6,7,8,9]);
  return (
    <div className="bg-secondary ">
      <h1 className="bg-info p-3 rounded  sticky-top ">React with Bootstrap</h1>
      {list.map((item, index) => (
        <div key={index} className=" alert-info p-3 m-3 rounded">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
          consequatur! Libero corporis sit reiciendis minus, modi molestiae
          laborum iste sed illum eveniet error voluptas rem eligendi quasi
          inventore non aut. Libero accusantium quas sint illo.
        </div>
      ))}
    </div>
  );
}
