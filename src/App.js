import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <ListExample2 />
    </div>
  );
}

const MyDynamicInputComponent = () => {
  const [list, setList] = useState([]);

  //setp--1
  const [tweetInput, setTweetInput] = useState("");

  //step--2: e is important here;

  const readAndUpdateTweet = (e) => setTweetInput(e.target.value);

  const postTheTweet = () => {
    setList([tweetInput, ...list]);
    setTweetInput("");
  };

  return (
    <div>
      <h2>Tweets</h2>
      <div>
        <input
          type="text"
          value={tweetInput}
          onChange={(e) => readAndUpdateTweet(e)}
          placeholder="write your post.."
        />
        <input
          type="button"
          value="Tweet here"
          onClick={() => postTheTweet()}
        />
      </div>
      {list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

const MyInputComponent = () => {
  const [list, setList] = useState(["hyd", "Kolkata"]);

  const postTheTweet = () => {
    setList(["MUMBAI", ...list]);
  };

  return (
    <div>
      <h1>Mini Twitter</h1>
      <div>
        <input type="text" value="" placeholder="your thought..." />
        <input
          type="button"
          value="Tweet here"
          onClick={() => postTheTweet()}
        />
      </div>

      <h2>Tweets</h2>
      {list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

const InlineStyleComponent = () => {
  const [counter] = useState(100);

  return (
    <div>
      <h1>Inline Styling</h1>
      <div
        style={{
          backgroundColor: "yellowgreen",
          color: "white",
          padding: "8px",
        }}
      >
        {counter}
      </div>
    </div>
  );
};

const ListExample2 = () => {
  const [list, setList] = useState([1, 2]);

  const addNewItem = () => {
    //setList([...list, Math.random()]);
    setList([Math.random(), ...list]);
  };

  return (
    <div>
      <h1>List Example2</h1>
      <div>
        <input
          type="button"
          value=" Add new Element"
          onClick="{(e)=> addNewItem()}"
        />
      </div>

      {list.map((item, index) => (
        <div>
          {" "}
          key={index} className="beautify" {item}
        </div>
      ))}
    </div>
  );
};

const ListExampleComponent = () => {
  const [list, setList] = useState([1, Math.random()]);

  const updateList = () => {
    //makimg a copy of existing list
    const newList = [...list];

    //adding a new element
    newList.unshift(Math.random());

    //updating th list
    setList(newList);

    //setList([...list, Math.random()]);
  };

  return (
    <div>
      <h1>List Example Component</h1>
      <div>
        <input
          type="button"
          value="Add new Element"
          onClick={() => updateList()}
        />
      </div>
      {list.map((item, index) => (
        <div>
          key ={index} = {item}
        </div>
      ))}
    </div>
  );
};

const ListComponent = () => {
  const [counter] = useState(100);
  const [username] = useState("mumbai");
  const [list] = useState(["Delhi", "Calcutta", "Mumbai", "chennai", "goa"]);

  return (
    <div>
      <h1>List Component</h1>
      <h4>{counter}</h4>
      <h4>{username}</h4>

      {list.map((item, index) => (
        <h3>
          key= {index} = {item}
        </h3>
      ))}
    </div>
  );
};

//summary
function FifthComponent() {
  const [counter] = useState(100);
  const [username] = useState("mumbai");
  const [password] = useState("@3djdj*");

  //const updateUsername = () => {};
  //const updateCounter = () => {};
  //const updatePassoword = () => {};

  return (
    <div>
      <h1>Fifth Component</h1>
      <div>Counter : {counter}</div>
      <div>Username : {username}</div>
      <div>Password : {password}</div>
    </div>
  );
}

//equivalent to class in java
function FourthComponent() {
  let localCounter = 100;
  let [counter, setCounter] = useState(100);

  const updateCounter = () => {
    localCounter = localCounter + 1;

    //counter = counter + 1
    setCounter(counter + 1);

    console.log("Counter Operation", localCounter, counter);
  };
  //view is not getting updated

  return (
    <div>
      <h1>Fourth Component - Event/Action/Click</h1>
      <input type="button" value="update Counter" onClick={updateCounter} />

      <input
        type="button"
        value="update Counter1"
        onClick={() => updateCounter()}
      />
      <div>React Not Aware - {localCounter}</div>
      <div>React Aware -{counter}</div>
    </div>
  );
}

//equivalent to class in java
function ThirdComponent() {
  //not react aware
  const localCounter = 100;

  //react aware
  const [counter] = useState(150);

  //view :jsx

  return (
    <div>
      <h1>Third Component</h1>
      <div>React Not Aware -{localCounter}</div>
      <div>React Aware - {counter}</div>
    </div>
  );
}

/** Special function :: using react :: return jsx */
//<h1>...:: <MyComponent />

const MyComponent = () => {
  return (
    <div>
      <h1>React Heading</h1>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fuga
        dolorum, maiores ipsa facere, animi aliquam praesentium distinctio atque
        sint saepe repellendus quas id facilis quos architecto, officia
        temporibus voluptates autem. Asperiores nostrum sunt placeat veniam
        suscipit tempore repellat ducimus! Id, enim ipsa. Optio et doloremque
        non saepe nemo incidunt.
      </div>

      <h4> Heading..</h4>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
        vero quos blanditiis ad provident odio, porro quam quas cupiditate rem,
        fugit minima consequuntur aliquam ullam? Deleniti explicabo iusto quidem
        dicta?
      </div>
    </div>
  );
};

const SecondComponent = () => {
  return (
    <div>
      <h1>Second Component</h1>
    </div>
  );
};
