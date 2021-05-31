/* eslint-disable no-unreachable */
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [textInput, setTextInput] = useState("");
  const updateTextInput = (e) => setTextInput(e.target.value);

  const [list, setList] = useState([]);
  const postTweet = () => {
    setList([textInput, ...list]);
    setTextInput("");
  };

  const deleteTweet = (item, index) => {
    //which twwet has to delete..
    list.splice(index, 1);

    //swe can update the view
    setList([...list]);
  };
  return (
    <div className="bg-dark ">
      <h1 className="bg-info p-3">Mini Twitter</h1>
      <div className="m-3 mb-4">
        <input
          type="text"
          value={textInput}
          onChange={(e) => updateTextInput(e)}
          className="from-control mb-2"
          placeholder="post Tweet"
        />
        <input
          type="button"
          className="btn-info"
          onClick={() => postTweet()}
          value="Tweet"
        />
      </div>
      {list.map((item, index) => (
        <div key={index} className="alert-secondary">
          {item}
          <button
            className="btn btn-outline-danger m-3"
            onClick={() => deleteTweet(item, index)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}
