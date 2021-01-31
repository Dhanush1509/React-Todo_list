import react, { useState, useEffect } from "react";
import "../styles.css";
import Todo from "./Todo";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
export default function Input() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  function trackText(e) {
    const { value, name } = e.target;
    setInput(value);
  }
  function takeValue() {
    setList((prev) => {
      return [...new Set([...prev, input])];
    });

    setInput("");
  }
  /* order is very important here*/
  useEffect(() => {
    const data = localStorage.getItem("todoList");
    if (data) setList(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(list));
  }, [list]);
  /* order is very important here*/
  console.log(input, list);
  return (
    <center>
      <div className="input__component">
        <h1>Todo List</h1>
        <div className="addFlex">
          <input name="todo_item" value={input} onChange={trackText} />
          <AddCircleOutlineIcon className="addButton" onClick={takeValue} />
        </div>
        <Todo items={list} />
      </div>
    </center>
  );
}
