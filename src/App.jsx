import "./App.css";
import { useState } from "react";

function App() {
  const [greetingInputText, setGreetingInputText] = useState("");
  const [greetingText, setGreetingText] = useState("");

  return (
    <div className="App">
      <div className="greeting-container">{greetingText}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">{greetingInputText}</label>
        <input
          id="greeting-message"
          type="text"
          onChange={(event) => {
            setGreetingInputText(event.target.value);
          }}
          placeholder="Enter Message"
          value={greetingInputText}
        />
      </div>

      <div className="buttons">
        <button
          onClick={() => {
            setGreetingText(greetingInputText);
            setGreetingInputText("");
          }}
        >
          Update text
        </button>
      </div>
    </div>
  );
}

export default App;
