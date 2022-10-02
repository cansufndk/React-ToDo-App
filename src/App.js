import { useState } from "react";
import "./App.css";
import FormList from "./components/FormList";
import Header from "./components/Header";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  return (
    <div className="App bg-dark bg-gradient container mt-5 w-75 ">
      <div className="w-100 p-2">
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
    </div>
  );
}

export default App;
