import { useState } from "react";
import "./App.css";
import FormList from "./components/FormList";
import Header from "./components/Header";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  return (
    <div className="App">
      <div>
        <Header
          input={input}
          setInput={setInput}
          todo={todo}
          setTodo={setTodo}
        />
      </div>
      <div>
        <FormList todo={todo} setTodo={setTodo} />
      </div>
    </div>
  );
}

export default App;
